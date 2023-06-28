export default function Table({theadData, tbodyData}) {
    return (
      <table>
          <thead>
             <tr>
              {theadData.slice(1).map(heading => {
                return <th key={heading}>{heading}</th>
              })}
            </tr>
          </thead>
          <tbody>
              {tbodyData.map((row, index) => {
                  return <tr key={index}>
                      {theadData.slice(1).map((key, index) => {
                           return <td key={row[key]}>{row[key]}</td>
                      })}
                </tr>;
              })}
          </tbody>
      </table>
   );
   }