
export const Page2 = () => {
  //  use reqres to Sin.

  return (
    <form className="Page2form">
      <input
        name="address"
        type="text"
        placeholder="Enter address"
        className="Page2_address"
      />
      <input
        name="phone number"
        type="text"
        placeholder="Enter phone number"
        className="Page2_phone number"
      />
     <Link to ="./page1"> <input type="submit" value="prev"  className="Page1_submit" /></Link>
     <Link to ="./dashboard"> <input type="submit" value="NEXT"  className="Page1_submit" /></Link>
    </form>
  );
};