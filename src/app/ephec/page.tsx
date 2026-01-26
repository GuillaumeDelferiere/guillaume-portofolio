import Header from '../(components)/header';
import Footer from '../(components)/footer';
import { ephecActivities } from '@/lib/data';

export default function EphecPage() {
  return (
    <> <Header />
      <main className="container min-h-screen py-20">
        <h1 className="mb-8 text-3xl font-bold">Activités Ephec</h1>
        <div className="overflow-x-auto border rounded-lg dark:border-neutral-800">
          <table className="w-full text-left">
            <thead className="bg-neutral-100 dark:bg-neutral-900">
              <tr>
                <th className="p-4 font-semibold">Activité</th>
                <th className="p-4 font-semibold">Heures passées</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-neutral-800">
              {ephecActivities.map((item, index) => (
                <tr key={index} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50">
                  <td className="p-4">{item.activity}</td>
                  <td className="p-4">{item.hours}h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}