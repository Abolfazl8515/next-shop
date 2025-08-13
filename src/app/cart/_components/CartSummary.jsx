import Button from "@/ui/Button";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function CartSummary({ payDetail }) {
  return (
    <div className="w-full flex flex-col gap-y-3">
      <div className="flex gap-x-1">
        <CheckCircleIcon className="w-5 h-5 text-secondary-700" />
        <h4 className="text-secondary-700 font-black">اطلاعات پرداخت</h4>
      </div>
      <div className="flex flex-col">
        <label htmlFor="discount" className="text-secondary-700">
          کد تخفیف
        </label>
        <div className="flex justify-between items-center">
          <input
            type="text"
            id="discount"
            className="w-2/3 h-10 p-4 rounded-xl text-secondary-700 border border-secondary-100 bg-secondary-100 hover:border-primary-500 focus:border-primary-500 focus:bg-secondary-0 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-primary-200 dark:focus:shadow-secondary-200"
          />
          <Button variant="primary" className="text-xs font-black">
            اعمال کد
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between">
          <p className="text-secondary-700">جمع کل</p>
          <p className="text-secondary-700">
            {toPersianNumbersWithComma(payDetail?.totalGrossPrice)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-secondary-700">مبلغ تخفیف</p>
          <p className="text-secondary-700">
            {toPersianNumbersWithComma(payDetail?.totalOffAmount)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-secondary-700">مبلغ قابل پرداخت</p>
          <p className="text-secondary-700">
            {toPersianNumbersWithComma(payDetail?.totalPrice)}
          </p>
        </div>
      </div>
      <Button variant="primary">پرداخت سفارش</Button>
    </div>
  );
}

export default CartSummary;
