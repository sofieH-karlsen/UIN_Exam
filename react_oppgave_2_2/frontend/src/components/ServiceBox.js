export default function ServiceBox({ service }) {
  <aside>
    {/* TODO: Bytte ut Farge med riktig dynamisk verdi */}

    <div data-testid="service_box" data-color="Farge">
      Boks design selectedColor: {service?.box}
    </div>
  </aside>
}
