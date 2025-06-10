import { useState } from "react";

export default function BookingForm() {
  const [inputValue, setInputValue] = useState({
    date: "",
    time: "",
    number: "",
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue({
      date: "",
      time: "",
      number: "",
      occasion: "Birthday",
    });
  };

  return (
    <div className="formParent">
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={inputValue.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={inputValue.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Number of guests:
          <input
            type="number"
            name="number"
            value={inputValue.number}
            onChange={handleChange}
            min="1"
            required
          />
        </label>

        <label>
          Occasion:
          <select
            name="occasion"
            value={inputValue.occasion}
            onChange={handleChange}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}
