const Button = (props) => {
  let { className, text } = props;
  //  Write your code here.
  return <button className={className}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Social Buttons</h1>
    <div class="buttons-container">
      <Button className="like" text="Like" />
      <Button className="comment" text="Comment" />
      <Button className="share" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
