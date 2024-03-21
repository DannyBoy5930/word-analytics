export default function Textarea() {
  const handleChange = (e) => {
    console.log("change event...");
    console.log(e.target.value);
  };

  return (
    <textarea
      className="textarea"
      onChange={handleChange}
      placeholder="Enter your text"
      spellCheck="false"
    />
  );
}
