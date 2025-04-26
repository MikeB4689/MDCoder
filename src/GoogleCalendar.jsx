const GoogleCalendar = () => {
  return (
    <div id="GoogleCalendar">
      <form action="submit">
        <h1>Book a Meeting</h1>

        <ul>
          <li>
            <label>Meeting Date</label>
            <input type="date" />
          </li>

          <li>
            <label>Purpose</label>
            <input type="text" name="" id="" />
          </li>
          <li>
            <label>Desription</label>
            <textarea></textarea>
          </li>
        </ul>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default GoogleCalendar;
