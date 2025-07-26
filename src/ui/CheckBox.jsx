function CheckBox({ title, onChange, checked, value, name }) {
  return (
    <div className="w-10/12 h-full cursor-pointer flex justify-around items-center">
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        name={name}
        id={name}
        className="form-checkbox w-4 h-4 focus:accent-blue-600 rounded-sm focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor={value} className="text-xl cursor-pointer">
        {title}
      </label>
    </div>
  );
}

export default CheckBox;
