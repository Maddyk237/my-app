import React, { useEffect, useState } from "react";
import styles from "./Test.module.css";
import CardComponent from "../../components/Card/Card";

const Test = () => {
  const [name, setName] = useState("");
  const [askName, setAskName] = useState(false);

  const mouseClick = () => {
    setAskName(true);
  };
  useEffect(() => {
    if (askName) {
      const enteredName = prompt("Enter Name");
      setName(enteredName || "");
      setAskName(false);
    }
  }, [askName]);

  const setEducation = (e: any) => {
    console.log(e.target.value);
  };

  const arrList = [
    { id: 1, name: "Mandar", address: "Pune", age: 25 },
    { id: 2, name: "Sanket", address: "Mumbai", age: 24 },
    { id: 3, name: "Amol", address: "Nashik", age: 26 },
  ];

  const deleteRow = (index: any) => {
    // arrList.pop();
    arrList.splice(index, 1);
    console.log("Arrlist", arrList);
  };

  const divHide = () => {
    const hideDiv = document.getElementById("hide");
    hideDiv?.style.display === "none"
      ? (hideDiv.style.display = "block")
      : (hideDiv!.style.display = "none");
  };

  return (
    <div className={styles.background}>
      {/* <div className={styles.innerDiv}>
        <div className={styles.name}>{name}</div>
        <button onClick={mouseClick}>Click Me !!</button>
      </div> */}
      {/* <form>
        <div>
          <div>Select Education:</div>
          <input
            type="checkbox"
            name="tenth"
            value={"tenth"}
            onClick={setEducation}
          />
          <label htmlFor="tenth">10th</label>
          <input
            type="checkbox"
            name="twelth"
            value={"twelth"}
            onClick={setEducation}
          />
          <label htmlFor="twelth">12th</label>
        </div>
        <div>
          <div>Select Education:</div>
          <input
            type="radio"
            name="tenth"
            value={"tenth"}
            onClick={setEducation}
          />
          <label htmlFor="tenth">10th</label>
          <input
            type="radio"
            name="tenth"
            value={"twelth"}
            onClick={setEducation}
          />
          <label htmlFor="twelth">12th</label>
        </div>
      </form> */}

      {/* <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Number</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mandar</td>
              <td>25</td>
              <td>123456789</td>
            </tr>
            <tr>
              <td>Mandar</td>
              <td>25</td>
              <td>123456789</td>
            </tr>
            <tr>
              <td>Mandar</td>
              <td>25</td>
              <td>123456789</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Address</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {arrList.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* <div className={styles.cardContainer}>
        <CardComponent
          image={""}
          title={""}
          subtitle={""}
          description={""}
          price={""}
        />
        <CardComponent
          image={""}
          title={""}
          subtitle={""}
          description={""}
          price={""}
        />
        <CardComponent
          image={""}
          title={""}
          subtitle={""}
          description={""}
          price={""}
        />
        <CardComponent
          image={""}
          title={""}
          subtitle={""}
          description={""}
          price={""}
        />
      </div> */}

      {/* <div className={styles.Navbar}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className={styles.buttonProp}>Click Me</button>
      </div> */}

      {/* <div>
        {arrList.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.age}</td>
            <button onClick={() => deleteRow(index)}>Delete</button>
          </tr>
        ))}
      </div> */}

      {/* <button onClick={divHide}>Click to Hide</button>
      <div id="hide">Hello All!!</div> */}

      <div>
        {arrList.map((item, index) =>
          item.age > 24 ? (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.age}</td>
            </tr>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Test;
