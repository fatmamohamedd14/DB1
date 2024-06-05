import GenreBooksTable from "../../component/datatable/GenreBooksTable";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";

const GenreBooksList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <GenreBooksTable />
      </div>
    </div>
  );
};
export default GenreBooksList;
