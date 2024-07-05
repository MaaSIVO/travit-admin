import { Typography } from '../../../../../shared/components/atoms/Typography';
import './table.scss';
import { formatDateToLocal } from '../../../../../app/lib/utils';
import Link from 'next/link';

export default function Table({
  lines,
}: {
  lines: any[]
}) {
  let keys: string[] = [];

  if (lines && lines.length > 0) {
    keys = Object.keys(lines[0]).filter(key => key !== 'points');
  }

  const renderCellValue = (key: string, value: any) => {
    if (key === "created_at" || key === "updated_at") {
      return formatDateToLocal(value);
    } else if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    } else {
      return value;
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {keys.map(value => (
            <th key={value}>
              <Typography variant="bodySmall" bold>
                {value}
              </Typography>
            </th>
          ))}
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {lines?.map((line) => (
          <tr key={line.id}>
            {keys.map((key) => (
              <td key={`${line.id}-${key}`}>
                {renderCellValue(key, line[key])}
              </td>
            ))}
            <td>
              <Link href={`/dashboard/lines/edit/${line.id}`}>Edit</Link>
              <Link href={`/dashboard/lines/delete/${line.id}`}>Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
