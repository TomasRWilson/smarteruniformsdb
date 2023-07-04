import styles from "./Table.module.css";

export default function Table({theadData, tbodyData, skip = 1}) {

  console.log(skip)

    return (
      <table className={styles.tableStyle}>
          <thead>
             <tr>
              {theadData.slice(skip).map(heading => {
                return <th key={heading}>{heading}</th>
              })}
            </tr>
          </thead>
          <tbody>
              {tbodyData.map((row, index) => {
                  return <tr key={index}>
                      {theadData.slice(skip).map((key, index) => {
                           return <td key={row[key]}>{row[key]}</td>
                      })}
                </tr>;
              })}
          </tbody>
      </table>
   );
   }