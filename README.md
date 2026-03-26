# ⚽ Prode · La B y La T Championship 🎵

Prode web para el partido épico entre los **Bajos** y los **Tenores** del coro.

---

## 🚀 Deploy en Cloudflare Pages

1. Subí este repositorio a GitHub
2. Entrá a [pages.cloudflare.com](https://pages.cloudflare.com)
3. Conectá el repo → framework preset: **None**
4. Build command: (vacío) / Output directory: `/`
5. Deploy → listo, tenés URL pública

---

## 📊 Conectar Google Sheets (para guardar apuestas)

### Paso 1: Crear la hoja

1. Andá a [sheets.google.com](https://sheets.google.com) y creá una hoja nueva
2. Nombrala como quieras (ej: "Prode Coro")

### Paso 2: Crear el Apps Script

1. En la hoja: **Extensiones → Apps Script**
2. Borrá el código que viene por defecto
3. Pegá **todo** el contenido de `apps-script.js`
4. Guardá (Ctrl+S)

### Paso 3: Deployar el Web App

1. Hacé clic en **Implementar → Nueva implementación**
2. Tipo: `Aplicación web`
3. Ejecutar como: `Yo`
4. Quién tiene acceso: `Cualquier persona`
5. Hacé clic en **Implementar**
6. Copiá la **URL de la implementación** (algo así como `https://script.google.com/macros/s/XXXX/exec`)

### Paso 4: Conectar con el prode

1. Abrí `index.html`
2. Buscá esta línea cerca del principio del `<script>`:
   ```javascript
   const SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
   ```
3. Reemplazá `'YOUR_APPS_SCRIPT_URL_HERE'` con tu URL del paso anterior
4. Guardá y hacé push al repo

---

## 🎮 Cómo funciona

| Vista | Descripción |
|-------|-------------|
| **Inicio** | El usuario pone su nombre y apellido |
| **Prode** | 3 preguntas: ganador, goleador, autogol |
| **Confirmación** | Resumen de la apuesta |
| **Resultados** | Contador por equipo + rankings en tiempo real |

### Estructura de la Google Sheet

| Timestamp | Nombre | Ganador | Goleador | GoleadorEquipo | Autogol | AutogolEquipo |
|-----------|--------|---------|----------|---------------|---------|---------------|
| 26/3/2025 23:01 | Juan Pérez | Tenores | Passer | tenores | Elias | bajos |

---

## 👥 Planteles

### 🎵 BAJOS (DT: La Profe Bárcena)
**Titulares:** Majo y Jere, Lorean, Elias, Ramita, Franjuu, Teofiolo, Máximo Décimo  
**Banco:** Barriopuro, Gomeria, Juju Peligro, El Veneno, San Ty

### 🎶 TENORES (DT: El Profe Mattos)
**Titulares:** Barrioviejo, El Galgo Therian, Passer, Kike, Fernandez, Valdez, Yabran  
**Banco:** Muruga, Yavendran, El Negro, Mario Bros, Mastantuono

---

## 🛠️ Editar jugadores

Para cambiar los planteles, editá el objeto `PLAYERS` en `index.html`:

```javascript
const PLAYERS = {
  bajos:   ['Jugador1', 'Jugador2', ...],
  tenores: ['Jugador1', 'Jugador2', ...]
};
```

---

**La Gran 7 · 26 de Marzo · 23 hs** 🏆
