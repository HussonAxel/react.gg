export default function CharacterLimit() {
  const handleChange = (event) => {
    const maxCharacterValue = 10;
    const currentCharacterValue = event.target.value.length;

    if (currentCharacterValue > maxCharacterValue) {
      alert("Character limit exceeded");
    }
  };

  return (
    <section>
      <h1>Character Limit</h1>
      <input placeholder="Enter some text" onChange={handleChange} />
    </section>
  );
}
