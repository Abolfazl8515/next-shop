function CheckBox({ title, onChange, checked, value, name }) {
  return (
    <div className="w-10/12 h-full flex justify-around items-center">
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        name={name}
        id={name}
        className="w-4 h-4"
      />
      <label htmlFor={value} className="text-xl">
        {title}
      </label>
    </div>
  );
}

export default CheckBox;
