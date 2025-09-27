function CheckBox({ title, onChange, checked, value, name }) {
  return (
    <label
      htmlFor={name}
      className="w-full h-10 flex items-center justify-around bg-primary-400 text-secondary-700 rounded-2xl cursor-pointer"
    >
      <div className="w-1/2 flex items-center justify-center">
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          value={value}
          name={name}
          id={name}
          className="form-checkbox w-4 h-4 mr-2 focus:accent-blue-600 rounded-sm focus:ring-blue-500 focus:ring-2"
        />
      </div>
      <div className="w-1/2">
        <span className="text-xl">{title}</span>
      </div>
    </label>
  );
}

export default CheckBox;
