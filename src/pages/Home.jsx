import Featuredinfo from '../components/Featuredinfo';
import Chart from '../components/Chart';
import Widgetsmall from '../components/Widgetsmall';
import Widgetlg from '../components/Widgetlg';

function Home() {
  return (
    <div>
      <Featuredinfo />
      <section className="grid grid-cols-1">
        <Chart title={'User Anaytics'} />
      </section>
      <div className="lg:flex mt-8">
        <Widgetsmall />
        <Widgetlg />
      </div>
    </div>
  );
}

export default Home;
