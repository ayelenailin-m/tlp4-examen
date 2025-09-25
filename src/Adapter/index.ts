export default function DemoAdapter() {
  class InventarioViejo {
    private items: { nombre: string }[] = [];

    addItem(nombre: string): void {
      this.items.push({ nombre });
      console.log(`Equipo ${nombre} agregado al inventario`);
    }

    getItems(): { nombre: string }[] {
      return this.items;
    }
  }

  class AdaptadorInventario {
    private gateway: InventarioViejo;

    constructor(gateway: InventarioViejo) {
      this.gateway = gateway;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
      // Solo se guarda el nombre, porque InventarioViejo solo maneja nombre
      this.gateway.addItem(nombre);
    }

    public listarEquipos(): { nombre: string }[] {
      return this.gateway.getItems();
    }
  }

  const inventarioViejo = new InventarioViejo();
  const adaptador = new AdaptadorInventario(inventarioViejo);
  adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
  console.log(adaptador.listarEquipos());
}
