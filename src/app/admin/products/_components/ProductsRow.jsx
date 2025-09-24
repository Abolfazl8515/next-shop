import Table from "@/ui/Table";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

function ProductsRow({ products }) {
  return products.map((product, index) => (
    <Table.Row key={product._id}>
      <td>{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.category.title}</td>
      <td>{product.brand}</td>
      <td>{new Date(product.createdAt).toLocaleDateString("fa-IR")}</td>
      <td>{toPersianNumbersWithComma(product.price)}</td>
      <td>{product.discount}%</td>
      <td>{toPersianNumbersWithComma(product.offPrice)}</td>
      <td>{product.countInStock}</td>
      {/* <td>
        <div className="flex gap-x-3">
          <UpdateButton id={product._id} />
          <DeleteButton id={product._id} productTitle={product.title} />
        </div>
      </td> */}
    </Table.Row>
  ));
}

export default ProductsRow;
