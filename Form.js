import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <input type="text" placeholder="ชื่อข่าว" className="input-title" />

      <div className="date-group">
        <button className="date-button">วันโพส: 10/10/20xx</button>
        <button className="date-button">วันหมด: 15/10/20xx</button>
      </div>

      <div className="button-group">
        <select className="dropdown">
          <option>ประชุม</option>
          <option>กิจกรรม</option>
        </select>
        <button className="blue-button">SE #10</button>
        <button className="blue-button">Add SE</button>
      </div>

      <textarea
        placeholder="รายละเอียด........................."
        className="textarea"
      ></textarea>

      <div className="image-group">
        <button className="image-button">+</button>
        <input type="text" placeholder="Link URL" className="input-link" />
      </div>

      <div className="action-group">
        <button className="cancel-button">Cancel</button>
        <button className="post-button">Post</button>
      </div>
    </div>
  );
}

export default Form;
