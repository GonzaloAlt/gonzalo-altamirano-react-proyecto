export const FilterBar = (props) => {
  const handleEventsOpt = (e) => {
    props.changeFilter(e.target.value);
  };

  return (
    <div className="flex justify-end sm:px-[20%] pt-10">
      <span className="pr-2 py-1.5">Filtrar por:</span>
      <div className="mb-3 xl:w-96">
        <select
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-red-rug-500 focus:outline-none"
          aria-label="Default select example"
          onChange={(e) => handleEventsOpt(e)}
        >
          <option
            defaultValue
            value={JSON.stringify({ property: "", maxmin: "" })}
          >
            Seleccione la opción
          </option>
          <option value={JSON.stringify({ property: "name", maxmin: "min" })}>
            A-Z
          </option>
          <option value={JSON.stringify({ property: "name", maxmin: "max" })}>
            Z-A
          </option>
          <option value={JSON.stringify({ property: "price", maxmin: "min" })}>
            Menor a mayor precio
          </option>
          <option value={JSON.stringify({ property: "price", maxmin: "max" })}>
            Mayor a menor precio
          </option>
        </select>
      </div>
    </div>
  );
};
