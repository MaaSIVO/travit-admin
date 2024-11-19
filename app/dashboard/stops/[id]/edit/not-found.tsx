import { LinkButton } from "@/ui/components";

export default function NotFound() {
  return (
    <main>
      <h2>404 Not Found</h2>
      <p>No se encontro la Parada.</p>
      <LinkButton
        label="Go Back"
        href="/dashboard/stops"
      />
    </main>
  );
}
