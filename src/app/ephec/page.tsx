import Header from '../(components)/header';
import Footer from '../(components)/footer';
import { ephecActivities, professionalProject } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EphecPage() {
  return (
    <>
      <Header />
      <main className="container min-h-screen py-20 space-y-16">
        
        {/* 1. SECTION PROJET PROFESSIONNEL */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">Portfolio EPHEC</h1>
          <Card className="shadow-sm border-neutral-200 dark:border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">
                Projet Pro : {professionalProject.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                {professionalProject.description}
              </p>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="pb-2 text-lg font-semibold border-b">Points Forts</h3>
                  {professionalProject.strengths.map((s, i) => (
                    <p key={i} className="text-sm"><span className="font-bold">{s.name} :</span> {s.details}</p>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="pb-2 text-lg font-semibold border-b">Axe d'amélioration</h3>
                  {professionalProject.weaknesses.map((w, i) => (
                    <p key={i} className="text-sm"><span className="font-bold">{w.name} :</span> {w.details}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 2. LE TABLEAU EXISTANT (Synthèse) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Synthèse des activités</h2>
          <div className="overflow-x-auto border shadow-sm rounded-xl dark:border-neutral-800">
            <table className="w-full text-left">
              <thead className="bg-neutral-50 dark:bg-neutral-900">
                <tr>
                  <th className="p-4 font-semibold">Thème / Activité</th>
                  <th className="p-4 font-semibold text-right">Heures</th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-neutral-800">
                {ephecActivities.map((item, index) => (
                  <tr key={index} className="transition-colors hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50">
                    <td className="p-4">
                      <div className="font-medium">{item.theme}</div>
                      <div className="text-xs text-neutral-500">{item.activity}</div>
                    </td>
                    <td className="p-4 font-mono text-right">{item.hours}h</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-neutral-50 dark:bg-neutral-900">
                <tr>
                  <th className="p-4 font-semibold">Total</th>
                  <th className="p-4 font-semibold text-right">68h</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* 3. LES CARTES D'ANALYSES DÉTAILLÉES */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Analyses Réflexives</h2>
          <div className="grid gap-8">
            {ephecActivities.map((item, index) => (
              <Card key={index} className="overflow-hidden border-l-4 border-l-blue-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-neutral-50/50 dark:bg-neutral-900/50">
                  <CardTitle className="text-xl font-bold">{item.theme}</CardTitle>
                  <Badge variant="outline" className="ml-2">{item.hours}h</Badge>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="grid gap-6">
                    <div>
                      <h4 className="mb-2 text-sm font-bold tracking-wider text-blue-600 uppercase">1. Cadre de l'activité</h4>
                      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{item.analysis.cadre}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-bold tracking-wider text-blue-600 uppercase">2. Faits et apprentissages</h4>
                      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{item.analysis.faits}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-bold tracking-wider text-blue-600 uppercase">3. Créativité et mise en perspective</h4>
                      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{item.analysis.perspective}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4 border-t dark:border-neutral-800">
                    {item.link && (
                      <a href={item.link} target="_blank" className="text-xs font-semibold text-blue-500 hover:underline">Voir le projet →</a>
                    )}
                    {item.repo && (
                      <a href={item.repo} target="_blank" className="text-xs font-semibold text-blue-500 hover:underline">Code source →</a>
                    )}
                    {item.proof && (
                      <a href={item.proof} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-green-600 hover:underline">Preuve →</a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}