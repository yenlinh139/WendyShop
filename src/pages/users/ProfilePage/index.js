import React, { Component } from "react";
import "./style.scss";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    // Xử lý việc gửi thông tin liên hệ tại đây, ví dụ: gửi thông tin đến server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Sau khi gửi thành công, có thể reset state hoặc hiển thị thông báo thành công
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className=" contact-container">
        <h1>Liên hệ chúng tôi</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Họ tên:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Ghi chú:
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Gửi</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
