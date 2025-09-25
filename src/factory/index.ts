export default function DemoFactory() {
  class Equipo {
    protected nombre: string;
    constructor(nombre: string) {
      this.nombre = nombre;
    }
    detalles(): string {
      return `equipo creado: ${this.nombre}`;
    }
  }

  class Servidor extends Equipo {
    private ram: string;
    private procesador: string;
    constructor(nombre: string, ram: string, procesador: string) {
      super(nombre);
      this.ram = ram;
      this.procesador = procesador;
    }
  }

  class Notebook extends Equipo {
    private ram: string;
    private procesador: string;
    constructor(nombre: string, ram: string, procesador: string) {
      super(nombre);
      this.ram = ram;
      this.procesador = procesador;
    }
  }

  class EquipoFactory {
    crearEquipo(
      tipo: string,
      nombre: string,
      ram: string,
      procesador: string
    ): Equipo {
      if (tipo === "Servidor") {
        return new Servidor(nombre, ram, procesador);
      } else if (tipo === "Notebook") {
        return new Notebook(nombre, ram, procesador);
      }
      throw new Error("tipo de equipo no reconocido");
    }
  }

  const factory = new EquipoFactory();
  const server = factory.crearEquipo(
    "Servidor",
    "Dell PowerEdge",
    "32GB",
    "Xeon"
  );
  console.log(server.detalles());
}
