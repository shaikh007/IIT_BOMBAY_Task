const data = [{
        id: 1,
        name: 'urene',
        vendor: 'xyz',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 2,
        name: 'salphuric',
        vendor: 'abc',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 3,
        name: 'alpha',
        vendor: 'syz',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 4,
        name: 'urene alpah',
        vendor: 'siy',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 5,
        name: 'urene demon',
        vendor: 'yix',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 6,
        name: 'nitric acid',
        vendor: 'pio',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 7,
        name: 'phosphorous',
        vendor: 'rebeca',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 8,
        name: 'urene aple',
        vendor: 'immunity',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 9,
        name: 'mutane',
        vendor: 'cyz',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 10,
        name: 'butane',
        vendor: 'zxy',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 11,
        name: 'nitrogen',
        vendor: 'cba',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 12,
        name: 'oxygen',
        vendor: 'ohp',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 13,
        name: 'abiscous',
        vendor: 'dvy',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 14,
        name: 'kutane',
        vendor: 'hapson company',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
    {
        id: 15,
        name: 'hexane',
        vendor: 'imakule',
        density: '1.05 g/cm3',
        viscosity: '1.22 cP',
        packaging: 'Bottle',
        packSize: 500,
        unit: 'mL',
        quantity: 2
    },
];


const addRow = document.getElementById("add-row");
const arrowDown = document.getElementById("arrow-down");
const arrowUp = document.getElementById("arrow-up");
const deleteRow = document.getElementById("delete-row");
const refresh = document.getElementById("refresh");
const saveData = document.getElementById("save-btn");
const tableData = document.getElementById("data");

addRow.addEventListener("click", () => {
    var idNumber = document.getElementById("id_number").value;
    var chemical_name = document.getElementById("chemical_name").value;
    var vendor = document.getElementById("vendor").value;
    var density = document.getElementById("density").value;
    var viscosity = document.getElementById("viscosity").value;
    var packaging = document.getElementById("packaging").value;
    var packSize = document.getElementById("pack_size").value;
    var unit = document.getElementById("unit").value;
    var quantity = document.getElementById("quantity").value;

    var table = document.getElementById("data");
    var table_len = (table.rows.length) - 1;
    if (table_len >= 0) {
        var row = table.insertRow(table_len).outerHTML =
            "<tr id = 'row" + table_len + "' ><td id = 'idNumber_row" + table_len + "' > " + idNumber + "</td><td id='chemical_row" + table_len + "'>" + chemical_name + "</td><td id='vendor_row" + table_len + "'>" + vendor + "</td><td id='density-row" + table_len + "'>" + density + "</td><td id='viscosity_row" + table_len + "'>" + viscosity + "</td><td id='packaging_row" + table_len + "'>" + packaging + "</td><td id='packSize_row" + table_len + "'>" + packSize + "</td><td id='unit_row" + table_len + "'>" + unit + "</td><td id='quantity_row" + table_len + "'>" + quantity + "</td><td><input type='button' id='edit_button" + table_len + "' value='Write' class='edit' onclick='edit_row(" + table_len + ")'></td></tr > ";
    }
})
deleteRow.addEventListener("click", () => {
    var table = document.getElementById("data");
    if (table.length != 0) {
        table.deleteRow(0);
    }
})

function edit_row(lengthNo) {
    document.getElementById("edit_button" + lengthNo).style.display = "none";
    // document.getElementById("save_button" + no).style.display = "block";

    var idNumber = document.getElementById("idNumber_row" + lengthNo);
    var chemical_name = document.getElementById("chemical_row" + lengthNo);
    var vendor = document.getElementById("vendor_row" + lengthNo);
    var density = document.getElementById("density-row" + lengthNo);
    var viscosity = document.getElementById("viscosity_row" + lengthNo);
    var packaging = document.getElementById("packaging_row" + lengthNo);
    var packSize = document.getElementById("packSize_row" + lengthNo);
    var unit = document.getElementById("unit_row" + lengthNo);
    var quantity = document.getElementById("quantity_row" + lengthNo);

    var idNumber_element = idNumber.innerHTML;
    var chemicalName = chemical_name.innerHTML;
    var vendorValue = vendor.innerHTML;
    var densityValue = density.innerHTML;
    var viscosityValue = viscosity.innerHTML;
    var packagingValue = packaging.innerHTML;
    var packSizeValue = packSize.innerHTML;
    var unitValue = unit.innerHTML;
    var quantityValue = quantity.innerHTML;

    idNumber.innerHTML = "<input type='text' id='idNumber_element" + lengthNo + "' value='" + idNumber_element + "'>";
    chemical_name.innerHTML = "<input type='text' id='chemicalName" + lengthNo + "' value='" + chemicalName + "'>";
    vendor.innerHTML = "<input type='text' id='vendorValue" + lengthNo + "' value='" + vendorValue + "'>";
    density.innerHTML = "<input type='text' id='densityValue" + lengthNo + "' value='" + densityValue + "'>";
    viscosity.innerHTML = "<input type='text' id='viscosityValue" + lengthNo + "' value='" + viscosityValue + "'>";
    packaging.innerHTML = "<input type='text' id='packagingValue" + lengthNo + "' value='" + packagingValue + "'>";
    packSize.innerHTML = "<input type='text' id='packSizeValue" + lengthNo + "' value='" + packSizeValue + "'>";
    unit.innerHTML = "<input type='text' id='unitValue" + lengthNo + "' value='" + unitValue + "'>";
    quantity.innerHTML = "<input type='text' id='quantityValue" + lengthNo + "' value='" + quantityValue + "'>";
}

refresh.addEventListener("click", () => {
    window.location.reload();
})

saveData.addEventListener("click", () => {
    alert("Data Saved Successfully!!!!")
})