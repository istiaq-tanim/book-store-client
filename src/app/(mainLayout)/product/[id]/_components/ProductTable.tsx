import { BookItem } from "@/app/(mainLayout)/_components/BookCardList/BookCardList";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
const ProductTable = ({ book }: { book: BookItem }) => {
  console.log(book);
  return (
    <div className="container">
      <Table className="max-w-2xl mx-auto">
        <TableBody>
          <TableRow>
            <TableCell className="font-bold">SKU:</TableCell>
            <TableCell>BW-1003049</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">Category:</TableCell>
            <TableCell className="text-[#f30b0b]">
              Literature & Fiction
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">Book Author</TableCell>
            <TableCell className="text-[#f30b0b]">{book?.author}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">Book Format</TableCell>
            <TableCell>
              {book?.format?.map((item) => (
                <span key={item}>{item} </span>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
