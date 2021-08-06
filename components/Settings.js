import React from 'react';
import { View, Text } from 'react-native';
import AppModal from './AppModal';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const SettingsComponent = ({ modalVisible, setModalVisible, settingsOptions, prefArr }) => {
    return (
        <>
            <AppModal
                modalVisible={modalVisible}
                modalFooter={<></>}
                closeOnTouchOutside={false}
                modalBody={
                    <View>
                        {prefArr.map(({ name, selected, onPress }) => (
                            <View key={name}>
                                <TouchableOpacity
                                    onPress={onPress}
                                    style={{
                                        flexDirection: 'row',
                                        paddingVertical: 5,
                                        alignItems: 'center',
                                    }}
                                >
                                    {selected && (
                                        <FontAwesome name="check" size={24} color="white" />
                                    )}
                                    <Text style={{ fontSize: 17, paddingLeft: selected ? 15 : 30 }}>
                                        {name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                }
                title="Sort by"
                setModalVisible={setModalVisible}
            />
            <ScrollView style={{ backgroundColor: 'white' }}>
                {settingsOptions.map(({ title, subTitle, onPress, icon }, index) => (
                    <TouchableOpacity key={title} onPress={onPress}>
                        <View
                            style={{
                                paddingHorizontal: 20,
                                paddingBottom: 20,
                                paddingTop: 20,
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <View>
                                    <Text style={{ fontSize: 17 }}>{title}</Text>
                                    {subTitle && (
                                        <Text style={{ fontSize: 14, opacity: 0.5, paddingTop: 5 }}>
                                            {subTitle}
                                        </Text>
                                    )}
                                </View>
                                {icon}
                            </View>
                        </View>

                        <View style={{ height: 0.5, backgroundColor: 'grey' }} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    );
};

export default SettingsComponent;
