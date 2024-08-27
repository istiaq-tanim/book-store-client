import AuthorList from "./_components/Author/Author";
import Banner from "./_components/Banner/Banner";
import BioList from "./_components/Biography/Biography";
import BookCardList from "./_components/BookCardList/BookCardList";
import Category from "./_components/Category/Category";
import DealList from "./_components/Deals/Deals";
import Featured from "./_components/Featured/Featured";
import NewRelease from "./_components/NewRelase/NewRelease";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BookCardList></BookCardList>
      <div className="container">
        <Featured></Featured>
      </div>
      <DealList></DealList>
      <NewRelease></NewRelease>
      <BioList></BioList>
      <AuthorList></AuthorList>
    </div>
  );
};

export default HomePage;
