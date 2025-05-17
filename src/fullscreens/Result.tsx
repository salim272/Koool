import React, { useEffect, useReducer, useRef, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Linking, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import NintyMinsMainModal from './NintyMinsMainModal';
// import * as globalActions from '../../store/actions/GlobalDetails';
// import { fetch90MinutesList } from '../../apis/NetWorkCalls';
// import * as vehiclesegmenttypes from '../../store/actions/Vehsegment';

// const data = Array(5).fill({
//     name: 'Brake unit A- Master',
//     code: '1341734563437',
//     make: 'Make Name, Model Name',
//     category: 'Category, Sub-category',
//     fuel: 'Fuel type, Variant',
//     price: 564,
//     originalPrice: 720,
//     discount: '20% off',
// });
// let allmodels = [];
// let allVehicleMakes = [];
// let makeArrayList = [];
// let modelArrayList = [];
// let allDatas = [];

const FreeflowSearch = ({ route }) => {
    // const { categoryName } = route.params;
    // const { categoryName, selectedCategory, brands } = route.params;
    // const [cart, setCart] = useState([]);
    // const navigation = useNavigation();
    // const [main, setMain] = useState(true);
    // const [loading, setLoading] = useState(true);
    // const [searchText, setSearchText] = useState('');
    // const [mainLoading, setMainLoading] = useState(false);
    // const [displayMaterialListData, setDisplayMaterialListData] = useState([]);
    // const [showCatg, setShowCatg] = useState(false);
    // const [showModels, setShowModels] = useState(false);
    // const [selVehMake, setSelVehMake] = useState([]);
    // const [selVehModel, setSelVehModel] = useState([]);
    // const [selectedCat, setSelectedCat] = useState([]);
    // const [selCategory, setSelCategory] = useState();
    // const [cartItems, setCartItems] = useState([]);
    // const [makeArrayList, setmakeArrayList] = useState([])
    // const [grouped90MaterialListData, setGrouped90MaterialListData] = useState([]);
    // const [searchPlaceholder, setSearchPlaceholder] = useState(
    //     'Search by Part Name,Vehicle Model',
    // );
    // const [selectedMake, setSelectedMake] = useState();
    // const [selectedModel, setSelectedModel] = useState();
    // const [showMake, setShowMake] = useState(false);
    // const [groupedMaterialListData, setGroupedMaterialListData] = useState([]);
    // const [showMainCategoryModal, setShowMainCategoryModal] = useState(false);
    // const [mainCategory, setMainCategory] = useState();
    // const [, forceUpdate] = useReducer((x) => x + 1, 0);
    // const alldiscountBrands = useSelector(
    //     (state) => state.globalDetails.alldiscountBrands,
    // );

    // // const appState = useRef(AppState.currentState);

    // const nintyMinutesSubItemList = useSelector(
    //     (state) => state.globalDetails.nintyMinutesSubcategoryList,
    // );
    // const vehMakeArray = useSelector(
    //     (state) => state.vehicleDetails.vehicleModel,
    // );

    // const allsubCat = useSelector(
    //     (state) => state.globalDetails.allsubcategoryList,
    // );

    // const vehicleArray = useSelector(
    //     (state) => state.vehicleDetails.vehicleMasterList,
    // );
    // const cartselectedItem = useSelector(
    //     (state) => state.cartDetails.pmsCartItems,
    // );
    // const finalOrderList1 = useSelector(
    //     (state) => state.cartDetails.orderCartItems,
    // );
    // const finalOrderList2 = useSelector(
    //     (state) => state.cartDetails.posOpCartItems,
    // );
    // const finalOrderList3 = useSelector(
    //     (state) => state.cartDetails.estimateCartItems,
    // );
    // const vehseg = useSelector((state) => state.vehsegmentdetails.vehSegmentType);
    // const vehicles = useSelector(
    //     (state) => state.vehsegmentdetails.nintyMinsSelection,
    // );
    // // console.log('vehicles', vehicles);
    // const nintyMinutesList = useSelector(
    //     (state) => state.globalDetails.nintyMinutescategoryList,
    // );
    // console.log('vehicles', nintyMinutesList);
    // const companyBranches = useSelector(
    //     (state) => state.globalDetails.warehouseList,
    // );

    // const btobCustomerDetails = useSelector(
    //     (state) => state.globalDetails.btobCustomerDetails,
    // );

    // const handleAdd = (item) => {
    //     setCart((prevCart) => ({ ...prevCart, [item.id]: 1 })); // Initialize quantity to 1
    // };
    // const handleIncrement = (item: any) => {
    //     const currentQty = cart[item.id] || 0; // Get current quantity, default to 0 if not present
    //     if (currentQty >= item.availableQty) {
    //         alert('Entered Qty is More than Available Qty');
    //         return;
    //     }
    //     setCart((prevCart) => ({
    //         ...prevCart,
    //         [item.id]: currentQty + 1, // Increment quantity by 1
    //     }));
    // };


    // console.log(cart, "cart count")

    // const handleDecrement = (item: any) => {
    //     const currentQty = cart[item.id];
    //     if (currentQty > 1) {
    //         setCart((prevCart) => ({
    //             ...prevCart,
    //             [item.id]: currentQty - 1, // Decrease quantity by 1
    //         }));
    //     } else {
    //         const updatedCart = { ...cart };
    //         delete updatedCart[item.id]; // Remove item from cart if quantity is 0
    //         setCart(updatedCart);
    //     }
    // };



    // const dispatchReducer = useDispatch();
    // var stockDetailsList;
    // let finalOrderList = {
    //     orderItemList: [],
    //     orderTaxList: [],
    //     grandTotl: 0,
    //     subTotl: 0,
    //     discountPer: 0,
    //     discountAmount: 0,
    // };
    // let itemOrder = {
    //     itemTax: [],
    // };

    // console.log(cart, "cart count")
    // /**
    //  * in this we define the Tost message function were we pass the message from our function
    //  * it will display on the screen
    //  */
    // const showToast = (message) => {
    //     let toast = Toast.show(message, {
    //         duration: Toast.durations.LONG,
    //         position: Toast.positions.BOTTOM,
    //         shadow: true,
    //         animation: true,
    //         hideOnPress: true,
    //         delay: 0,
    //         onShow: () => { },
    //         onShown: () => { },
    //         onHide: () => { },
    //         onHidden: () => { },
    //     });
    // };

    // useEffect(() => {
    //     setLoading(false);
    //     if (vehicles.make != null) {
    //         setSelectedMake(vehicles.make);
    //     }
    //     if (vehicles.model != null) {
    //         setSelectedModel(vehicles.model);
    //     }
    //     if (vehicles.subCat != null) {
    //         setSelCategory(vehicles.subCat);
    //     }
    //     if (vehicles.mainCat != null) {
    //         setMainCategory(vehicles.mainCat);
    //     }

    //     let categoryName = route.params.categoryName;
    //     let brands = route.params.brands;
    //     let warehouseId = route.params.wareHouseId;
    //     let companyId = route.params.companyBrancId;
    //     // trackdata(props.route.params.categoryName);
    //     // validateJWTDateTime();
    //     setGroupedMaterialListData(nintyMinutesSubItemList);
    //     allDatas = nintyMinutesSubItemList;
    //     nintyMinutesSubItemList.forEach((value) => {
    //         if (
    //             value.vehicleMake != null &&
    //             value.vehicleMake != '' &&
    //             value.materialCommonName === vehicles.subCat &&
    //             value.vehicleMake.includes(vehicles.make)
    //         ) {
    //             let makeDetails = value.vehicleMake?.split(',');
    //             makeDetails?.forEach((mItems) => {
    //                 let vehIndex = makeArrayList.findIndex(
    //                     (mi) => mi.vehicleMake == mItems.trim(),
    //                 );
    //                 if (vehIndex == -1) {
    //                     makeArrayList.push({
    //                         vehicleMake: mItems,
    //                     });
    //                 }
    //             });
    //         }
    //         if (
    //             value.vehicleModel != null &&
    //             value.vehicleModel != '' &&
    //             value.materialCommonName === vehicles.subCat &&
    //             value.vehicleModel.includes(vehicles.model)
    //         ) {
    //             let modelDetails = value.vehicleModel.split(',');
    //             modelDetails.forEach((mItems) => {
    //                 let vehIndex = modelArrayList.findIndex(
    //                     (mi) => mi.vehicleModel == mItems,
    //                 );
    //                 if (vehIndex == -1) {
    //                     modelArrayList.push({
    //                         vehicleModel: mItems,
    //                     });
    //                 }
    //             });
    //         }
    //     });

    //     if (vehicles.make == null) {
    //         nintyMinutesSubItemList.forEach((Vals) => {
    //             if (
    //                 Vals.materialCommonName === vehicles.subCat &&
    //                 Vals.materialKCategoryName === vehicles.mainCat
    //             ) {
    //                 let makeDetails = Vals.vehicleMake?.split(',');
    //                 makeDetails?.forEach((mItems) => {
    //                     let vehIndex = makeArrayList.findIndex(
    //                         (mi) => mi.vehicleMake == mItems.trim(),
    //                     );
    //                     if (vehIndex == -1) {
    //                         makeArrayList.push({
    //                             vehicleMake: mItems,
    //                         });
    //                     }
    //                 });
    //             }
    //         });
    //     } else {
    //         nintyMinutesSubItemList.forEach((Vals) => {
    //             if (
    //                 Vals.materialCommonName === vehicles.subCat &&
    //                 Vals.materialKCategoryName === vehicles.mainCat
    //             ) {
    //                 let makeDetails = Vals.vehicleMake?.split(',');
    //                 makeDetails?.forEach((mItems) => {
    //                     let vehIndex = makeArrayList.findIndex(
    //                         (mi) => mi.vehicleMake == mItems.trim(),
    //                     );
    //                     if (vehIndex == -1) {
    //                         makeArrayList.push({
    //                             vehicleMake: mItems,
    //                         });
    //                     }
    //                 });
    //             }
    //         });
    //     }

    //     makeArrayList.forEach((item) => {
    //         vehMakeArray.forEach((val) => {
    //             if (item.vehicleMake === 'MARUTI') {
    //                 item.vehicleMake = 'MARUTI SUZUKI';
    //             } else if (item.vehicleMake === 'VW') {
    //                 item.vehicleMake = 'VOLKSWAGEN';
    //             }
    //             if (item.vehicleMake == val.make) {
    //                 item.url =
    //                     val.mediaDomainUri + val.mediaFolderPath + val.makeImageFileName;
    //             }
    //         });
    //     });
    //     const uniqueObjects = [
    //         ...new Map(
    //             makeArrayList.map((item) => [item.vehicleMake, item]),
    //         ).values(),
    //     ];
    //     uniqueObjects.sort((a, b) => a.vehicleMake.localeCompare(b.vehicleMake));

    //     setSelVehMake(uniqueObjects);

    //     modelArrayList.forEach((models) => {
    //         vehicleArray.forEach((makes) => {
    //             if (makes.make === vehicles.make) {
    //                 let check = makes.details.find(
    //                     (mod) => mod.name == models.vehicleModel,
    //                 );
    //                 if (check != undefined) {
    //                     allmodels.push(check);
    //                 }
    //             }
    //         });
    //     });

    //     allmodels.sort((a, b) => a.name.localeCompare(b.name));
    //     setSelVehModel(allmodels);

    //     if (
    //         vehicles.mainCat != null &&
    //         vehicles.make == null &&
    //         vehicles.model == null &&
    //         vehicles.subCat == null
    //     ) {
    //         let names = nintyMinutesSubItemList.filter((ite) => {
    //             return ite.materialKCategoryName === vehicles.mainCat;
    //         });
    //         console.log('isnide 1111112222222');

    //         setDisplayMaterialListData(names);

    //         forceUpdate();

    //         setLoading(false);
    //     } else if (
    //         vehicles.subCat != null &&
    //         vehicles.make == null &&
    //         vehicles.model == null &&
    //         vehicles.mainCat != null
    //     ) {
    //         let names = nintyMinutesSubItemList.filter((ite) => {
    //             return (
    //                 ite.materialKCategoryName === vehicles.mainCat &&
    //                 ite.materialCommonName === vehicles.subCat
    //             );
    //         });
    //         console.log('isnide 2222222222');
    //         setDisplayMaterialListData(names);

    //         forceUpdate();

    //         setLoading(false);
    //     } else {
    //         let names = nintyMinutesSubItemList.filter((ite) => {
    //             if (vehicles.model == null) {
    //                 console.log('isnideelse11111111');

    //                 return (
    //                     ite.materialKCategoryName === vehicles.mainCat &&
    //                     ite.materialCommonName === vehicles.subCat &&
    //                     ite.vehicleMake?.includes(vehicles.make)
    //                 );
    //             } else {
    //                 return (
    //                     ite.materialKCategoryName === vehicles?.mainCat &&
    //                     ite.materialCommonName === vehicles?.subCat &&
    //                     ite.vehicleMake?.includes(vehicles?.make) &&
    //                     ite.vehicleModel?.includes(vehicles?.model)
    //                 );
    //             }
    //         });

    //         forceUpdate();
    //         console.log('isnide 3');
    //         setDisplayMaterialListData(names);
    //     }
    // }, [nintyMinutesSubItemList, cartselectedItem]);

    // const onVehcileMakeTypeSelect = (item) => {
    //     setSelectedMake(item.vehicleMake);

    //     dispatchReducer(
    //         vehiclesegmenttypes.getNintyMinsSelection({
    //             mainCat: mainCategory,
    //             subCat: selCategory,
    //             make: item.vehicleMake,
    //         }),
    //     );

    //     setSelectedModel();

    //     allVehicleMakes = nintyMinutesSubItemList.filter((items) => {
    //         if (items.materialCommonName === selCategory) {
    //             if (items.vehicleMake != null && items.vehicleMake != '') {
    //                 return (
    //                     items.vehicleMake === item.vehicleMake ||
    //                     items.vehicleMake.includes(item.vehicleMake)
    //                 );
    //             }
    //         }
    //     });
    //     console.log('isnide 6');
    //     setDisplayMaterialListData(allVehicleMakes);

    //     let alldata = [];
    //     allmodels = [];

    //     allVehicleMakes.forEach((models) => {
    //         vehicleArray.forEach((makes) => {
    //             if (makes.make == item.vehicleMake) {
    //                 let names = models.vehicleModel.split(',');

    //                 names.forEach((name1) => {
    //                     let check = makes.details.find((mod) => mod.name === name1);
    //                     if (check != undefined) {
    //                         allmodels.push(check);
    //                     }
    //                 });
    //             }
    //         });
    //     });

    //     allmodels = [
    //         ...new Map(allmodels.map((item) => [item.name, item])).values(),
    //     ];
    //     allmodels.sort((a, b) => a.name.localeCompare(b.name));

    //     if (allmodels.length == 0) {
    //         setShowModels(false);
    //         setSelectedModel(null);
    //         allVehicleMakes = allVehicleMakes.filter((ites) => {
    //             return (
    //                 ites.vehicleMake.includes(item.vehicleMake) &&
    //                 ites.materialCommonName === selCategory
    //             );
    //         });

    //         setShowMake(true);
    //         setSelVehModel([]);

    //         setShowCatg(false);
    //         console.log('isnide 7');
    //         setDisplayMaterialListData(allVehicleMakes);
    //     } else {
    //         setShowMake(true);
    //         setShowModels(false);
    //         setSelVehModel(allmodels);
    //     }
    // };
    // const onVehcileModelTypeSelect = (item) => {
    //     setSelectedModel(item.name);

    //     dispatchReducer(
    //         vehiclesegmenttypes.getNintyMinsSelection({
    //             mainCat: mainCategory,
    //             subCat: selCategory,
    //             make: selectedMake,
    //             model: item.name,
    //         }),
    //     );

    //     let news = nintyMinutesSubItemList.filter((items) => {
    //         if (items.vehicleMake != null) {
    //             if (
    //                 items.vehicleMake === selectedMake ||
    //                 (items.vehicleMake.includes(selectedMake) &&
    //                     items.materialCommonName === selCategory)
    //             ) {
    //                 if (items.vehicleModel != null) {
    //                     const vehModels = items.vehicleModel
    //                         .split(',')
    //                         .map((model) => model.trim());

    //                     return vehModels.includes(item.name);
    //                 } else {
    //                 }
    //             } else {
    //             }
    //         } else {
    //         }
    //     });

    //     news = news.filter((ite) => {
    //         return (
    //             ite.materialCommonName === selCategory &&
    //             ite.vehicleMake.includes(selectedMake) &&
    //             ite.vehicleModel.includes(item.name)
    //         );
    //     });

    //     forceUpdate();
    //     console.log('isnide 18');
    //     setDisplayMaterialListData(news);
    // };

    // const displayMaterialListDatas = searchText.trim().length === 0
    //     ? displayMaterialListData
    //     : displayMaterialListData.filter(item =>
    //         item?.materialCommonName?.toLowerCase().includes(searchText.toLowerCase()) ||
    //         item?.matCode?.toLowerCase().includes(searchText.toLowerCase())
    //     );

    // const renderItem = ({ item, index }: { item: typeof data[0]; index: number }) => (
    //     <View style={styles.card}>
    //         <View style={{ flex: 1 }}>
    //             <Text style={styles.title}>{item?.materialCommonName}</Text>
    //             <Text style={styles.link}>{item?.matCode}</Text>
    //             <Text style={styles.text}>{item?.vehicleMake}</Text>
    //             <Text style={styles.text}>{item?.vehicleModel}</Text>
    //             <Text style={styles.text}>{item?.vehicleFuelType}</Text>
    //         </View>
    //         <View style={styles.priceContainer}>
    //             <Text style={styles.price}>₹ {item?.yourPrice}</Text>
    //             {item?.discount != null && (
    //                 <>
    //                     <Text style={styles.strike}>₹ {item?.maxRetailPrice}</Text>
    //                     <Text style={styles.discount}>{item?.discount}</Text>
    //                 </>
    //             )}
    //             {cart[item.id] ? ( // Check quantity in cart by item.id
    //                 <View style={styles.counter}>
    //                     <TouchableOpacity onPress={() => handleDecrement(item)}>
    //                         <Text style={styles.button}>-</Text>
    //                     </TouchableOpacity>
    //                     <Text style={styles.quantity}>{cart[item.id]}</Text>
    //                     <TouchableOpacity onPress={() => handleIncrement(item)}>
    //                         <Text style={styles.button}>+</Text>
    //                     </TouchableOpacity>
    //                 </View>
    //             ) : (
    //                 <TouchableOpacity style={styles.addButton} onPress={() => handleAdd(item)}>
    //                     <Text style={styles.addText}>ADD</Text>
    //                 </TouchableOpacity>
    //             )}
    //         </View>
    //     </View>
    // );

    // const openFastDeliveryItems = (item) => {
    //     // trackNintyMinutesData(item.genericMasterValue1);
    //     setMainCategory(item.title);
    //     // setMainCategory(item.genericMasterValue1);
    //     dispatchReducer(globalActions.addNintyMinutesSubCategoryList([]));

    //     let nintyMinsRegion = companyBranches.find(
    //         (item) =>
    //             item.region?.toUpperCase() == btobCustomerDetails.region?.toUpperCase(),
    //     );

    //     if (nintyMinsRegion != undefined) {
    //         setLoading(true);
    //         setMainLoading(true);
    //         setSelectedMake(null);
    //         setSelectedModel(null);
    //         fetch90MinutesList(
    //             alldiscountBrands,
    //             item.title,
    //             nintyMinsRegion?.id,
    //             vehseg,
    //             nintyMinsRegion?.wareHouseId,
    //             makeArrayList,
    //             modelArrayList,
    //             setSelVehMake,
    //             finalOrderList3,
    //             vehMakeArray,
    //             (values) => {
    //                 setmakeArrayList(makeArrayList)
    //                 dispatchReducer(globalActions.addNintyMinutesSubCategoryList(values));
    //                 setGrouped90MaterialListData(values);
    //                 let uniqueObjects = {};
    //                 values.forEach((obj) => {
    //                     uniqueObjects[obj.materialCommonName] = obj.materialCommonName;
    //                 });

    //                 let output = Object.values(uniqueObjects);

    //                 let allmaterialNames = [];

    //                 output.forEach((item) => {
    //                     let names = allsubCat.find((img) => img.name === item);

    //                     if (names != undefined) {
    //                         allmaterialNames.push({
    //                             materialCommonName: item,
    //                             url: names.img,
    //                         });
    //                     } else {
    //                         allmaterialNames.push({
    //                             materialCommonName: item,
    //                             url: '',
    //                         });
    //                     }
    //                 });

    //                 allmaterialNames = allmaterialNames.sort((first, second) => {
    //                     return first.materialCommonName.localeCompare(
    //                         second.materialCommonName,
    //                     );
    //                 });
    //                 allmaterialNames = allmaterialNames.filter((items) => {
    //                     return (
    //                         items.materialCommonName != null && items.materialCommonName != ''
    //                     );
    //                 });

    //                 setSelectedCat(allmaterialNames);
    //                 setShowCatg(false);

    //                 //UNCOMMENT THIS FOR NEW MODAL
    //                 setShowMainCategoryModal(true);
    //                 setMain(true);
    //                 setSelVehMake([]);
    //                 setSelectedMake(null);
    //                 setSelectedModel(null);
    //                 setSelCategory(null);
    //                 setShowMake(false);

    //                 setShowModels(false);
    //                 setLoading(false);
    //                 setMainLoading(false);
    //             },
    //         );
    //     }
    // };

    // const onVehcileMatCatSelect = (item) => {
    //     setSelCategory(item.materialCommonName);
    //     setLoading(true);
    //     let selectedModeldata = [];

    //     let filteredData = grouped90MaterialListData.filter((check) => {
    //         return check.materialCommonName === item.materialCommonName;
    //     });
    //     selectedModeldata = nintyMinutesSubItemList.filter((items) => {

    //         if (items.vehicleModel != null) {
    //             if (items.vehicleModel.includes(',')) {
    //                 const vehModels = items.vehicleModel
    //                     .split(',')
    //                     .map((model) => model.trim());
    //                 return items.materialCommonName === item.materialCommonName;
    //             } else {
    //                 return items.materialCommonName === item.materialCommonName;
    //             }
    //         } else {
    //             return items.materialCommonName === item.materialCommonName;
    //         }
    //     });

    //     setLoading(false);
    //     let allcat = [];

    //     if (selectedMake == '' && selectedModel == '') {
    //         let names = grouped90MaterialListData.filter((items) => {
    //             return items.materialCommonName == item.materialCommonName;
    //         });

    //     } else {
    //         const oilFilter = selectedModeldata.filter(
    //             (items) => items.materialCommonName === item.materialCommonName,
    //         );

    //         setGrouped90MaterialListData(oilFilter);
    //         const matchingVehicleMakes = makeArrayList?.filter((vehicleMake) => {
    //             return oilFilter.some((product) => {
    //                 return product.vehicleMake?.includes(vehicleMake?.vehicleMake);
    //             });
    //         });

    //         let allvehs = matchingVehicleMakes.filter(
    //             (make, index, self) =>
    //                 index === self.findIndex((m) => m.vehicleMake === make.vehicleMake),
    //         );

    //         if (allvehs.length == 0) {
    //             let nintyMinsRegion = companyBranches.find(
    //                 (item) =>
    //                     item.region?.toUpperCase() ==
    //                     btobCustomerDetails.region?.toUpperCase(),
    //             );

    //             setShowCatg(true);
    //             setShowMake(false);
    //             setShowModels(false);
    //             setSelVehMake([]);
    //             showToast('No Vehicle Make and Model exist');
    //             alert('No Vehicle Make and Model exist');
    //         }
    //         else {
    //             setSelVehMake(allvehs);
    //         }
    //     }
    // };

    // const onCloseMainModal = () => {
    //     let nintyMinsRegion = companyBranches.find(
    //         (item) =>
    //             item.region?.toUpperCase() == btobCustomerDetails.region?.toUpperCase(),
    //     );

    //     if (
    //         mainCategory != '' ||
    //         selCategory != '' ||
    //         selectedMake != '' ||
    //         selectedModel != ''
    //     ) {
    //         setShowMainCategoryModal(false);

    //         dispatchReducer(
    //             vehiclesegmenttypes.getNintyMinsSelection({
    //                 mainCat: mainCategory,
    //                 subCat: selCategory,
    //                 make: selectedMake,
    //                 model: selectedModel,
    //             }),
    //         );

    //         navigation.navigate('Result', {
    //             //materialKCategoryName materialCategoryName
    //             categoryName: mainCategory,
    //             brands: selectedMake,
    //             companyBrancId: nintyMinsRegion.id,
    //             wareHouseId: nintyMinsRegion.wareHouseId,
    //             allDiscountBrands: alldiscountBrands,
    //             selectedMake: selectedMake,
    //             selectedModel: selectedModel,
    //             selectedCategory: selCategory,
    //         });
    //     } else {
    //         alert('Please make at least one selection');
    //         setShowMainCategoryModal(true);
    //     }
    // };

    // const confirmvehmodel = () => {
    //     allVehicleMakes = nintyMinutesSubItemList.filter((items) => {
    //         if (items.materialCommonName === selCategory) {
    //             if (items.vehicleMake != null && items.vehicleMake != '') {
    //                 return (
    //                     items.vehicleMake === selectedMake ||
    //                     items.vehicleMake.includes(selectedMake)
    //                 );
    //             }
    //         }
    //     });
    //     setDisplayMaterialListData(allVehicleMakes);
    //     let alldata = [];
    //     allmodels = [];

    //     allVehicleMakes.forEach((models) => {
    //         vehicleArray.forEach((makes) => {
    //             if (makes.make == selectedMake) {
    //                 let names = models.vehicleModel.split(',');

    //                 names.forEach((name1) => {
    //                     let check = makes.details.find((mod) => mod.name === name1);
    //                     if (check != undefined) {
    //                         allmodels.push(check);
    //                     }
    //                 });
    //             }
    //         });
    //     });

    //     allmodels = [
    //         ...new Map(allmodels.map((item) => [item.name, item])).values(),
    //     ];
    //     allmodels.sort((a, b) => a.name.localeCompare(b.name));
    //     setSelVehModel(allmodels);
    // };

    // const clearAllFilters = () => {
    //     setSelectedMake('');
    //     setSelectedModel('');

    //     setMainCategory('');
    //     setSelCategory('');
    //     setSelVehMake([]);
    //     setSelVehModel([]);
    //     setSelectedCat([]);
    // };

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Results</Text>

                <View style={styles.cartIconWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('CartScreen', { cartItems })}>
                        <Ionicons name="cart" size={24} color="black" />
                        {(
                            <View style={{
                                position: 'absolute',
                                right: -6,
                                top: -6,
                                backgroundColor: 'red',
                                borderRadius: 10,
                                width: 18,
                                height: 18,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{ color: 'white', fontSize: 10 }}>{Object.keys(cart).length}</Text>
                            </View>
                        )}
                        
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.tagsContainer}>
                {[categoryName, selectedCategory, selectedMake, brands]
                    .filter(tag => tag && tag.trim() !== '')
                    .map((tag, i) => (
                        <View key={i} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))
                }
            </View>

            <View style={styles.searchRow}>
                <View style={styles.searchBox}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#aaa"
                        style={styles.searchInput}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    <Ionicons name="search" size={20} color="#ccc" />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setShowMainCategoryModal(true);
                        setMain(true);
                        setShowMake(false);
                        setShowModels(false);
                        setShowCatg(false);
                    }}
                    style={styles.filterButton}
                >
                    <Ionicons name="funnel" size={22} color="#000" />
                </TouchableOpacity>
                <NintyMinsMainModal
                    showMainCategoryModal={showMainCategoryModal}
                    setShowMainCategoryModal={setShowMainCategoryModal}
                    nintyMinutesList={nintyMinutesList}
                    openFastDeliveryItems={openFastDeliveryItems}
                    selectedCat={selectedCat}
                    showCatg={showCatg}
                    setShowCatg={setShowCatg}
                    onVehcileMatCatSelect={onVehcileMatCatSelect}
                    showMake={showMake}
                    setShowMake={setShowMake}
                    selVehMake={selVehMake}
                    onVehcileMakeTypeSelect={onVehcileMakeTypeSelect}
                    showModels={showModels}
                    setShowModels={setShowModels}
                    selVehModel={selVehModel}
                    onVehcileModelTypeSelect={onVehcileModelTypeSelect}
                    main={main}
                    setMain={setMain}
                    onCloseMainModal={onCloseMainModal}
                    mainCategory={mainCategory}
                    selCategory={selCategory}
                    selectedMake={selectedMake}
                    selectedModel={selectedModel}
                    confirmvehmodel={confirmvehmodel}
                    clearAllFilters={clearAllFilters}
                />
            </View>

            <FlatList
                data={displayMaterialListDatas}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 100 }}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        flex: 1,
        marginLeft: 10,
    },

    cartIconWrapper: {
        position: 'relative',
        padding: 5,
    },

    cartCountBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 1,
        minWidth: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cartCountText: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    cartIcon: {
        marginLeft: 'auto',
        padding: 8,
        position: 'relative',
    },

    cartBadge: {
        position: 'absolute',
        right: 2,
        top: 2,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
        minWidth: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cartBadgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },

    // header: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginBottom: 15,
    // },
    // headerTitle: {
    //     fontSize: 20,
    //     fontWeight: '600',
    //     marginLeft: 10,
    // },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 15,
    },
    tag: {
        backgroundColor: '#F1F1F1',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    tagText: {
        color: '#333',
    },

    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 10,
    },

    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },

    searchInput: {
        flex: 1,
        paddingVertical: 8,
        color: '#000',
    },

    filterButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    card: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 4,
    },
    link: {
        color: '#007B8F',
        marginBottom: 4,
    },
    text: {
        fontSize: 13,
        color: '#333',
    },
    priceContainer: {
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        marginLeft: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    strike: {
        textDecorationLine: 'line-through',
        color: '#999',
        fontSize: 12,
    },
    discount: {
        color: '#007B8F',
        fontSize: 13,
        marginBottom: 6,
    },
    addButton: {
        backgroundColor: '#007B8F',
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 16,
    },
    addText: {
        color: '#fff',
        fontWeight: '600',
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    button: {
        fontSize: 18,
        color: '#007B8F',
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default FreeflowSearch;