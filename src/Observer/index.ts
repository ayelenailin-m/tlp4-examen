export default function DemoObserver() {
  interface Observador {
    update(estado: string): void;
  }
  interface IEquipo {
    nombre: string;
    tipo: string;
    estado: string;
  }

  class Equipo implements IEquipo {
    nombre: string;
    tipo: string;
    estado: string;
    private observadores: Set<Observador> = new Set();

    constructor(nombre: string, tipo: string, estado: string) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.estado = estado;
    }

    agregarObservador(o: Observador) {
      this.observadores.add(o);
    }

    removeObserver(o: Observador) {
      this.observadores.delete(o);
    }

    cambiarEstado(estado: string) {
      console.log(`Estado cambiado`);
      this.observadores.forEach((o) => o.update(estado));
    }
  }

  class Soporte implements Observador {
    update(estado: string) {
      console.log(`Soporte notificado `);
    }
  }

  // probando
  const equipo = new Equipo("Notebook HP", "Portatil", "disponible");
  equipo.agregarObservador(new Soporte());

  equipo.cambiarEstado("en reparación");
}
