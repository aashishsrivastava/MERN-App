import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategory = [
    "fiction",
    "non-fiction",
    "mistery",
    "programming",
    "science fiction",
    "fantacy",
    "horror",
    "bibliography",
    "autobiography",
    "history",
    "self-help",
    "memoir",
    "business",
    "children books",
    "travel",
    "religion",
    "art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategory[0]
  );

  const handleChangeSelectedValues = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const book_title = form.book_title.value;
    const author_name = form.author_name.value;
    const image_url = form.image_url.value;
    const category = form.category.value;
    const book_description = form.book_description.value;
    const book_pdf_url = form.book_pdf_url.value;

    // console.log(book_title);

    const bookObj = {
      book_title,
      author_name,
      image_url,
      category,
      book_description,
      book_pdf_url,
    };
    console.log(bookObj);
    // send data to data base
    // fetch("http://localhost:5000/upload-book", {
    fetch("${window.location.origin}/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        alert("Book uploaded successfully!");
        // form.reset();
      });
  };

  return (
    <>
      <div className="px-4 my-12">
        <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

        {/* <form className="flex lg:w-[1180px] flex-wrap gap-4"> */}

        <form
          onSubmit={handleBookSubmit}
          className="flex lg:w-[1180px] flex-col flex-wrap max-w-5xl gap-4"
        >
          {/* 1st row */}
          <div className="flex gap-8 ">
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Book Title" />
              </div>
              <TextInput
                id="book_title"
                name="book_title"
                placeholder="Book name"
                required
                type="text"
              />
            </div>
            {/* author name */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="authorName" value="Author Name" />
              </div>
              <TextInput
                id="author_name"
                name="author_name"
                placeholder="Author name"
                required
                type="text"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex gap-8 ">
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="image_url" value="Book Image URL " />
              </div>
              <TextInput
                id="image_url"
                name="image_url"
                placeholder="Book image URL"
                required
                type="text"
              />
            </div>
            {/* category */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
              </div>

              <select
                id="inputState"
                name="category"
                className="w-full  rounded "
                value={selectedBookCategory}
                onChange={handleChangeSelectedValues}
              >
                {bookCategory.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* book_description */}
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="book_description" value="Book Description" />
            </div>

            <Textarea
              id="book_description"
              name="book_description"
              type="text"
              required
              rows={6}
              placeholder=" write your Book Description"
              className="w-full "
            />
          </div>

          {/* book pdf link */}

          <div>
            <div className="mb-2 block">
              <Label htmlFor="book_pdf_url" value="Book PDF URL" />
            </div>
            <TextInput
              id="book_pdf_url"
              name="book_pdf_url"
              placeholder="Book PDF URL"
              // required
              type="text"
            />
          </div>

          {/* submit button */}

          <Button type="submit" className="mt-5">
            Upload Book
          </Button>
          {/* <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button> */}
        </form>
      </div>
    </>
  );
};

export default UploadBook;
