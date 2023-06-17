import contactimg from "../assets/img/contact.jpg";

export const Contact = () => {
  return (
    <div className="container-fluid contact">
      <div class="row">
        <div class="col-lg-6 bg-success p-2 text-dark bg-opacity-10 contact-body"></div>
        <div class="col-lg-6 contact-form">
          <form>
            <div class="form-row">
              <div class="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div class="form-group">
              <label>Subject</label>
              <input type="text" class="form-control" placeholder="Subject" />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
