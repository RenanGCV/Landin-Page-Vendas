import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY não está definida');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-03-31.basil',
});

const plans = {
  essential: {
    name: 'Pacote Essencial',
    price: 19790, // em centavos
    description: "SiteExpress Pro – Pacote Essencial: Um site profissional com até 5 páginas, design responsivo, visual personalizado, integração com redes sociais, formulário de contato simples e SEO básico. Ideal para pequenos negócios e profissionais autônomos que precisam estar online com rapidez, custo-benefício e um layout moderno. Entrega em até 7 dias úteis com suporte técnico por 7 dias após a entrega."
  },
  premium: {
    name: 'Pacote Premium',
    price: 25790, // em centavos
    description: 'SiteExpress Pro – Pacote Premium: Tudo do Pacote Essencial, com o adicional de textos estratégicos, animações profissionais, criação ou refino de logo, seleção de imagens e fontes personalizadas, formulários inteligentes, otimização de performance, suporte estendido por 15 dias e prioridade na entrega. Ideal para marcas em crescimento e negócios que querem se destacar com presença digital forte e conversão otimizada.'
  }
};

export async function POST(request: Request) {
  try {
    const { planId } = await request.json();
    const plan = plans[planId as keyof typeof plans];

    if (!plan) {
      return NextResponse.json(
        { error: 'Plano não encontrado' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: plan.name,
              description: plan.description,
            },
            unit_amount: plan.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL || 'https://landin-page-vendas.vercel.app'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'https://landin-page-vendas.vercel.app'}/`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Erro ao criar sessão:', error);
    return NextResponse.json(
      { error: 'Erro ao processar pagamento' },
      { status: 500 }
    );
  }
} 