import Link from 'next/link';
const tabs = [
  { name: 'Concept' },
  { name: 'Menu' },
  { name: 'Designers' },
  { name: 'Contact' },
  { name: 'Gallery' },
];
export default function Home() {
  return (
    <div>
      <p>HomeIcon</p>
      <ul>
        {tabs.map((tab) => {
          return (
            <li>
              <Link as={`/${tab.name}`} href="/[name]">
                <a>{tab.name}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/reserve">
            <a>Reserve</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
