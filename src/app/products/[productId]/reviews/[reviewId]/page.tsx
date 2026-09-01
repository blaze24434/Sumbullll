type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ReviewDetail({ params }: Props) {
  return (
    <h1>
      Review #{params.reviewId} untuk Produk #{params.productId}
    </h1>
  );
}