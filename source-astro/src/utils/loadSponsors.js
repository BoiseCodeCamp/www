import fs from 'node:fs';
import path from 'node:path';

// process.cwd() = source-astro/ when invoked via npm run build/dev
const SPONSORS_DIR = path.resolve(process.cwd(), '../sponsors');
const CSV_PATH = path.join(SPONSORS_DIR, 'sponors.csv');
const LOGOS_DEST = path.resolve(process.cwd(), 'public/img/sponsors');

function parseCSV(content) {
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.replace(/^"|"$/g, '').trim());
  return lines.slice(1).map(line => {
    const values = [];
    let current = '';
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']));
  });
}

export function loadSponsors() {
  const rows = parseCSV(fs.readFileSync(CSV_PATH, 'utf-8'));

  // Sync logos from sponsors/ into public/img/sponsors/
  fs.mkdirSync(LOGOS_DEST, { recursive: true });
  for (const row of rows) {
    const src = path.join(SPONSORS_DIR, row.logo);
    const dest = path.join(LOGOS_DEST, row.logo);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    } else {
      console.warn(`[sponsors] logo not found: ${src}`);
    }
  }

  return rows.map(row => ({
    id: row.name.toLowerCase().replace(/\s+/g, '-'),
    name: row.name,
    logo: `/img/sponsors/${row.logo}`,
    url: row.url,
  }));
}
