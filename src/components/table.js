function Table(props) {
  return (
    <table id = "table_id" class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.displayedEmployee.length > 0 ? (
          props.displayedEmployee.map((person) => {
            return (
              <tr>
                <th scope="row"><img src={person.picture.thumbnail}/></th>
                <td>{person.name.first}</td>
                <td>{person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>2545255548</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
