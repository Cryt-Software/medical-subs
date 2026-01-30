import axios, { endpoints } from 'src/utils/axios';

import { ProductDetailsView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Product Details',
};

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailsPage({ params }: Props) {
  const { id } = params;

  return <ProductDetailsView id={id} />;
}

export async function generateStaticParams() {
  try {
    const res = await axios.get(endpoints.product.list);
    return res.data.products.map((product: { id: string }) => ({
      id: product.id,
    }));
  } catch (error) {
    return [];
  }
}
