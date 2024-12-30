import { useState } from "react";
import { Input, inputVariants } from "../UI/Input";
import MobileNoteTop from "./MobileNoteTop";

export default function NewNote() {
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="w-full min-h-screen p-4 overflow-hidden ">
      <form onSubmit={submitHandler} className="flex flex-col gap-4 mb-2 ">
        <MobileNoteTop submitHandler={submitHandler} />
        <label htmlFor="title" className="pt-2 border-t">
          Title
        </label>
        <Input
          required
          type="text"
          name="title"
          id=""
          onChange={handleChange}
          value={formData.title}
        />

        <label htmlFor="Tags">Tags</label>
        <Input
          required
          type="text"
          name="tags"
          id=""
          onChange={handleChange}
          value={formData.tags}
        />

        <textarea
          required
          name="content"
          placeholder="Content"
          id=""
          className={`w-full resize-none h-screen ${inputVariants({})}`}
          onChange={handleChange}
          value={formData.content}
        ></textarea>
      </form>
    </div>
  );
}
