// ╔══════════════════════════════════════════════════════════════════╗
// ║  PRODE · La B y La T Championship — Google Apps Script          ║
// ║  Pegá este código en script.google.com y deployá como Web App   ║
// ╚══════════════════════════════════════════════════════════════════╝

// 1. Abrí tu Google Sheet
// 2. Andá a Extensiones → Apps Script
// 3. Pegá este código completo
// 4. Guardá → Implementar → Nueva implementación
// 5. Tipo: "Aplicación web"
//    Ejecutar como: "Yo"
//    Quién tiene acceso: "Cualquier persona"
// 6. Copiá la URL y pegala en index.html donde dice SCRIPT_URL

const SHEET_NAME = 'Apuestas';

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Headers
    sheet.appendRow([
      'Timestamp', 'Nombre',
      'Ganador',
      'Goleador', 'GoleadorEquipo',
      'Autogol',  'AutogolEquipo'
    ]);
    // Formato de headers
    const headerRange = sheet.getRange(1, 1, 1, 7);
    headerRange.setBackground('#FFE600');
    headerRange.setFontWeight('bold');
    headerRange.setFontColor('#111111');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function doGet(e) {
  const action = e.parameter.action || 'get';

  // ── SUBMIT via GET params ──
  if (action === 'submit') {
    try {
      const sheet = getOrCreateSheet();
      sheet.appendRow([
        new Date(),
        e.parameter.nombre        || '',
        e.parameter.ganador       || '',
        e.parameter.goleador      || '',
        e.parameter.goleadorEquipo|| '',
        e.parameter.autogol       || '',
        e.parameter.autogolEquipo || ''
      ]);
      return jsonResponse({ success: true });
    } catch(err) {
      return jsonResponse({ success: false, error: err.message });
    }
  }

  // ── GET all bets ──
  try {
    const sheet = getOrCreateSheet();
    const rows = sheet.getDataRange().getValues();

    // Skip header row
    const bets = rows.slice(1).map(row => ({
      timestamp:       row[0] ? row[0].toString() : '',
      nombre:          row[1] || '',
      ganador:         row[2] || '',
      goleador:        row[3] || '',
      goleadorEquipo:  row[4] || '',
      autogol:         row[5] || '',
      autogolEquipo:   row[6] || ''
    }));

    return jsonResponse(bets);
  } catch(err) {
    return jsonResponse({ error: err.message });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
