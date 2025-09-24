import Table from "@/ui/Table";
import ProductsRow from "./ProductsRow";

function LatestProducts({ products }) {
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.Row>
            <td>#</td>
            <td>عنوان</td>
            <td>دسته بندی </td>
            <td>برند</td>
            <td>تاریخ ایجاد</td>
            <td>قیمت (تومان)</td>
            <td>تخفیف</td>
            <td>قیمت بعد تخفیف(تومان)</td>
            <td>موجودی</td>
            <td>عملیات</td>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <ProductsRow products={products} />
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestProducts;
