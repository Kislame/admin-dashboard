function Newproduct() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="md:text-3xl text-xl font-semibold  md:text-start text-center">
          New Product
        </h1>
      </div>
      <form className="grid grid-cols-1 mt-8 gap-8 max-w-sm">
        <label htmlFor="image" className="text-slate-700 font-medium text-lg">
          Product Image:
        </label>
        <input
          type="file"
          id="image"
          className=" block  file-input file-input-bordered file-input-primary file-input-sm  max-w-xs"
        />

        <div className="flex flex-col gap-8 ">
          <label className="text-slate-700 font-medium text-lg ">
            Prdouct Name
            <input
              type="text"
              name="productName"
              placeholder="white dress"
              className="block w-full mt-2  border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
          <label
            htmlFor="active"
            className="text-slate-700 font-medium text-lg"
          >
            Active:
            <select
              name="active"
              id="active"
              className="py-2 pl-2  mt-2 font-medium bg-white border-slate-300 border  text-lg w-full"
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </label>

          <label className="text-slate-700 font-medium text-lg">
            in stock:
            <input
              type="number"
              name="stock"
              placeholder="380"
              className="block  w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Newproduct;
