const Card = () => {
  return (
    <section className="flex md:flex-row flex-col justify-between items-center gap-20">
      <div className=" md:basis-1/3  bg-secondary text-white md:p-3 p-6 rounded-md">
        <h4>Profit</h4>
        <span className="text-4xl">89.9%</span>
      </div>
      <div className=" md:basis-1/3  bg-primary rounded-md md:p-3 p-6 text-white">
        <h4>Sales</h4>
        <span className="text-4xl">93.9%</span>
      </div>
      <div className=" md:basis-1/3 bg-[#2B2D42] text-white rounded-md md:p-3 p-6">
        <h4>Registerd Users</h4>
        <span className="text-4xl">59.9%</span>
      </div>
    </section>
  );
};

export default Card;
