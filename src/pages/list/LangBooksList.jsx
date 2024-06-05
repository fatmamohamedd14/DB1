import LangBooksTable from "../../component/datatable/LangBooksTable";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";

const LangBooksList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <LangBooksTable />
      </div>
    </div>
  );
};
export default LangBooksList;
