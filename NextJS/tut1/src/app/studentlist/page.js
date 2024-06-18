import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/dj">Dj</Link>
        </li>
        <li>
          <Link href="/studentlist/henry">Henry</Link>
        </li>
        <li>
          <Link href="/studentlist/paulo">Paulo</Link>
        </li>
        <li>
          <Link href="/studentlist/jjj">jjj</Link>
        </li>
      </ul>
    </div>
  );
}
