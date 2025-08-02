import Book from "../models/book.model.js"

export const getBook = async (req, res) =>{
  try {
    const book = await Book.find()
    res.status(200).json(book)
  } catch (error) {
    console.log("Error : " , error)
    res.status(500).json(error)
  }
}



export const getBookById = async (req, res) => {
  try {
    const { id } = req.params; 
   

    if (!id) {
      return res.status(400).json({ message: "Invalid book ID" });
    }

    const book = await Book.findById(id); // ✅ pass just the ID string

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message : "Success",
      success : true,
      book : book

    });
  } catch (error) {
    console.error("Error getting book by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
};

