import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
const ProductTable = () => {
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
            <TableCell className="text-[#f30b0b]">Douglas Kennedy</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">Book Format</TableCell>
            <TableCell>Hardcover, Kindle, Paperback</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
