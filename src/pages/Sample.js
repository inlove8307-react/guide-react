import React from "react";
import { isMobile } from "react-device-detect";
// HOOK
import useModals from "hook/useModals";
// LAYOUT
import UxLayout from "components/layout/UxLayout";
import UxSection from "components/layout/UxSection";
import UxArticle from "components/layout/UxArticle";
import UxTitle from "components/layout/UxTitle";
import UxContent from "components/layout/UxContent";
import UxDock from "components/layout/UxDock";
// BASE
import UxBadge from "components/base/UxBadge";
import UxButton from "components/base/UxButton";
import UxCheckbox from "components/base/UxCheckbox";
import UxChip from "components/base/UxChip";
import UxDivider from "components/base/UxDivider";
import UxFile from "components/base/UxFile";
import UxImage from "components/base/UxImage";
import UxIcon from "components/base/UxIcon";
import UxInput from "components/base/UxInput";
import UxLink from "components/base/UxLink";
import UxPassword from "components/base/UxPassword";
import UxRadio from "components/base/UxRadio";
import UxRange from "components/base/UxRange";
import UxSelect from "components/base/UxSelect";
import UxSpacer from "components/base/UxSpacer";
import UxSwitch from "components/base/UxSwitch";
import UxText from "components/base/UxText";
import UxTextarea from "components/base/UxTextarea";
// MIXIN
// import UxAlert from "components/mixin/UxAlert";
// import UxBottomSheet from "components/mixin/UxBottomSheet";
import UxBreadcrumb from "components/mixin/UxBreadcrumb";
import UxCalendar from "components/mixin/UxCalendar";
import UxCard from "components/mixin/UxCard";
import UxCollapse from "components/mixin/UxCollapse";
// import UxConfirm from "components/mixin/UxConfirm";
import UxDatePicker from "components/mixin/UxDatepicker";
import UxDropdown from "components/mixin/UxDropdown";
import UxField from "components/mixin/UxField";
import UxFieldset from "components/mixin/UxFieldset";
import UxFilter from "components/mixin/UxFilter";
import UxForm from "components/mixin/UxForm";
import UxGroup from "components/mixin/UxGroup";
import UxInfo from "components/mixin/UxInfo";
import UxKeypad from "components/mixin/UxKeypad";
import UxTextList from "components/mixin/UxTextList";
// import UxMasking from "components/mixin/UxMasking";
import UxPagination from "components/mixin/UxPagination";
import UxPopover from "components/mixin/UxPopover";
import UxProgress from "components/mixin/UxProgress";
import UxSwiper from "components/mixin/UxSwiper";
import UxTab from "components/mixin/UxTab";
import UxTable from "components/mixin/UxTable";
import UxTimeline from "components/mixin/UxTimeline";
// import UxToast from "components/mixin/UxToast";
import UxToggle from "components/mixin/UxToggle";
import UxToggleGroup from "components/mixin/UxToggleGroup";
import UxTooltip from "components/mixin/UxTooltip";
import UxThumb from "components/mixin/UxThumb";

const Page = () => {
	const { Modal, Alert, Confirm, BottomSheet, Toast } = useModals();

	return (
		<UxLayout>
			<UxSection>
				<UxArticle>
					<UxTitle>
						<h3>SAMPLE</h3>
					</UxTitle>

					<UxContent>
						<UxArticle>
							<UxTitle>
								<h4>UxButton</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxButton
										label="label"
										onClick={(event)=>{console.log("UxButton onClick", event);}}
									/>
									<UxButton
										className="fill"
										label="label"
										onClick={(event)=>{console.log("UxButton onClick", event);}}
									/>
									<UxButton
										label="label"
										icon={
											<UxIcon
												icon="clear"
												align="left"
											/>
										}
										onClick={(event)=>{console.log("UxButton onClick", event);}}
									/>
									<UxButton
										label="label"
										icon={<UxIcon icon="clear" />}
										onClick={(event)=>{console.log("UxButton onClick", event);}}
									/>
									<UxButton
										icon={<UxIcon icon="clear"/>}
										onClick={(event)=>{console.log("UxButton onClick", event);}}
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxChip</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxChip
										label="label"
										onClick={(event)=>{console.log("UxChip onClick", event);}}
									/>
									<UxChip
										label="label"
										onClick={(event)=>{console.log("UxChip onClick", event);}}
										icon={
											<UxIcon
												icon="clear"
												color="white"
												onClick={() => {console.log("UxChip Icon onClick");}}
											/>
										}
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxLink</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxLink
										href="#"
										label="UxLink"
									/>
									<UxLink
										className="underline"
										href="#"
										label="UxLink Underline"
									/>
									<UxLink
										href="#"
										label="UxLink Icon"
										icon={<UxIcon icon="angle-right" />}
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxBadge</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxBadge label="99" />
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxDivider</h4>
							</UxTitle>

							<UxContent>
								<UxGroup
									className="flex column"
								>
									<UxDivider className="xxs"/>
									<UxDivider className="xs"/>
									<UxDivider className="sm"/>
									<UxDivider className="md"/>
									<UxDivider className="lg"/>
									<UxDivider className="xl"/>
									<UxDivider className="xxl"/>
									<UxDivider className="dash"/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxText Size</h4>
							</UxTitle>

							<UxContent>
								<UxGroup
									className="flex column"
								>
									<UxText
										className="xxs"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="xs"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="sm"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="md"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="lg"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="xl"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="xxl"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxText Linear</h4>
							</UxTitle>

							<UxContent>
								<UxGroup
									className="flex column"
								>
									<UxText
										className="xxs linear"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="xs linear"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="sm linear"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="md linear"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="lg linear"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="xl linear"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
									<UxText
										className="xxl linear"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxText Prefix, Bullet</h4>
							</UxTitle>

							<UxContent>
								<UxGroup
									className="flex column"
								>
									<UxText
										prefix="-"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>

									<UxText
										bullet="dot"
										label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxTextList</h4>
							</UxTitle>

							<UxContent>
								<UxGroup
									className="flex column"
								>
									<UxTextList>
										<UxText
											prefix="-"
											label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
										/>
										<UxText
											prefix="-"
											label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
										/>
										<UxText
											prefix="-"
											label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
										/>
									</UxTextList>
									<UxTextList
										bullet="dot"
										data={[
											"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
											"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
											"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
										]}
									/>
									<UxTextList
										className="line"
										prefix="number"
										data={[
											"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
											"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
											"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
										]}
									/>
									<UxCard>
										<UxTextList
											className="line"
											data={[
												"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
												"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
												"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
											]}
										/>
									</UxCard>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxInfo</h4>
							</UxTitle>

							<UxContent>
								<UxGroup
									className="flex column"
								>
									<UxInfo
										data={[
											{ label: "label1", value: "value1" },
											{ label: "label2", value: "value2" },
											{ label: "label3", value: "value3" },
										]}
									/>
									<UxInfo
										className="line"
										data={[
											{ label: "label1", value: "value1" },
											{ label: "label2", value: "value2" },
											{ label: "label3", value: "value3" },
										]}
									/>
									<UxCard>
										<UxInfo
											className="line"
											data={[
												{ label: "label1", value: "value1" },
												{ label: "label2", value: "value2" },
												{ label: "label3", value: "value3" },
											]}
										/>
									</UxCard>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxTable</h4>
							</UxTitle>

							<UxContent>
								<UxGroup
									className="flex column"
								>
									<UxTable className="center">
										<caption>caption</caption>
										<colgroup>
												<col style={{ width: "50%" }} />
												<col style={{ width: "50%" }} />
										</colgroup>
										<thead>
											<tr>
												<th scope="col">label</th>
												<th scope="col">label</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>value</td>
												<td>value</td>
											</tr>
										</tbody>
									</UxTable>

									<UxTable className="scroll">
										<caption>caption</caption>
										<colgroup>
												<col style={{ minWidth: "200px" }} />
												<col style={{ minWidth: "200px" }} />
												<col style={{ minWidth: "200px" }} />
												<col style={{ minWidth: "200px" }} />
												<col style={{ minWidth: "200px" }} />
										</colgroup>
										<thead>
											<tr>
												<th scope="col">label</th>
												<th scope="col">label</th>
												<th scope="col">label</th>
												<th scope="col">label</th>
												<th scope="col">label</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>value</td>
												<td>value</td>
												<td>value</td>
												<td>value</td>
												<td>value</td>
											</tr>
										</tbody>
									</UxTable>

									<UxTable className="center">
										<caption>caption</caption>
										<colgroup>
												<col style={{ width: "50%" }} />
												<col style={{ width: "50%" }} />
										</colgroup>
										<tbody>
											<tr>
												<th scope="row">label</th>
												<td className="left">value</td>
											</tr>
											<tr>
												<th scope="row">label</th>
												<td className="left">value</td>
											</tr>
										</tbody>
									</UxTable>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxImage</h4>
							</UxTitle>

							<UxContent>
								<UxGroup
									className="flex column"
								>
									<UxImage
										className="full"
										src="/assets/images/image_01.png"
										alt="UxImage Alt"
									>
										UxImage Figcaption
									</UxImage>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxInput</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
										>
											<UxInput
												align="right"
												placeholder="입력하세요."
												suffix="원"
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
										>
											<UxInput
												prefix="$"
												placeholder="입력하세요."
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
										>
											<UxInput
												placeholder="입력하세요."
												button="전송"
												timer="05:00"
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
										>
											<UxInput
												placeholder="입력하세요."
												icon={
													<UxIcon
														icon="calendar"
														onClick={(event)=>{console.log("UxInput onIconClick", event);}}
													/>
												}
												clear
											/>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxInput Status</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
											result="Result"
											valid
										>
											<UxInput
												value="valid"
												placeholder="입력하세요."
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											invalid
										>
											<UxInput
												value="invalid"
												placeholder="입력하세요."
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											readonly
										>
											<UxInput
												value="Readonly"
												placeholder="입력하세요."
												prefix="prefix"
												suffix="suffix"
												button="전송"
												timer="05:00"
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											disabled
										>
											<UxInput
												value="Disabled"
												placeholder="입력하세요."
												prefix="prefix"
												suffix="suffix"
												button="전송"
												timer="05:00"
												clear
											/>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxPassword</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
										>
											<UxPassword
												mask="7"
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											valid
										>
											<UxPassword
												mask="7"
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											invalid
										>
											<UxPassword
												mask="7"
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											readonly
										>
											<UxPassword
												mask="7"
												clear
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											disabled
										>
											<UxPassword
												mask="7"
												clear
											/>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxInput + UxPassword</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxInput
													className="grow"
													value="010"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											valid
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxInput
													className="grow"
													value="010"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											invalid
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxInput
													className="grow"
													value="010"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											readonly
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxInput
													className="grow"
													value="010"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											disabled
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxInput
													className="grow"
													value="010"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
												<UxPassword
													className="grow"
													mask="4"
												/>
											</UxGroup>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxTextarea</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
											result="Result"
										>
											<UxTextarea
												maxLength="300"
												placeholder="300자 이내로 작성해 주세요."
												fluid
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											valid
										>
											<UxTextarea
												maxLength="300"
												placeholder="300자 이내로 작성해 주세요."
												value="Valid"
												fluid
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											invalid
										>
											<UxTextarea
												maxLength="300"
												placeholder="300자 이내로 작성해 주세요."
												value="Invalid"
												fluid
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											readonly
										>
											<UxTextarea
												maxLength="300"
												placeholder="300자 이내로 작성해 주세요."
												value="Readonly"
												fluid
											/>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											disabled
										>
											<UxTextarea
												maxLength="300"
												placeholder="300자 이내로 작성해 주세요."
												value="Disabled"
												fluid
											/>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxFile</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
										>
											<UxFile
												placeholder="파일 버튼을 클릭하세요."
												onChange={(event) => {
													console.log("UxFile onChange", event.target.value);
												}}
											/>
										</UxField>

										<UxFile
											onChange={(event) => {
												console.log("UxFile onChange", event.target.value);
											}}
										>
											<UxButton label="파일첨부" />
										</UxFile>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxThumb</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxThumb
										src="/assets/images/image_01.png"
										style={{ width: "96px", height: "96px" }}
										label="label1"
										// icon={<UxIcon icon="clear" color="white" onClick={() => {console.log("UxThumb UxIcon onClick")}} />}
										// onClick={() => {console.log("UxThumb onClick")}}
									/>
									<UxThumb
										src="/assets/images/image_01.png"
										style={{ width: "96px", height: "96px" }}
										label="label2"
										// icon={<UxIcon icon="clear" color="white" onClick={() => {console.log("UxThumb UxIcon Click")}} />}
										onClick={() => {console.log("UxThumb onClick")}}
									/>
									<UxThumb
										src="/assets/images/image_01.png"
										style={{ width: "96px", height: "96px" }}
										label="label3"
										icon={<UxIcon icon="clear" color="white" onClick={() => {console.log("UxThumb UxIcon Click")}} />}
										onClick={() => {console.log("UxThumb onClick")}}
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxSelect</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
										>
											<UxSelect
												placeholder="선택해주세요."
												onSelect={(props) => {console.log("UxSelect onSelect", props);}}
											>
												<span data-value="0" data-label="React" />
												<span data-value="1" data-label="Vue" />
												<span data-value="2" data-label="Svelte" />
											</UxSelect>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											valid
										>
											<UxSelect
												placeholder="선택해주세요."
												value="0"
												onSelect={(props) => {console.log("UxSelect onSelect", props);}}
											>
												<span data-value="0" data-label="React" />
												<span data-value="1" data-label="Vue" />
												<span data-value="2" data-label="Svelte" />
											</UxSelect>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											invalid
										>
											<UxSelect
												placeholder="선택해주세요."
												value="0"
												onSelect={(props) => {console.log("UxSelect onSelect", props);}}
											>
												<span data-value="0" data-label="React" />
												<span data-value="1" data-label="Vue" />
												<span data-value="2" data-label="Svelte" />
											</UxSelect>
										</UxField>

										<UxField
											label="label"
											message="Message"
											readonly
										>
											<UxSelect
												placeholder="선택해주세요."
												value="0"
												onSelect={(props) => {console.log("UxSelect onSelect", props);}}
											>
												<span data-value="0" data-label="React" />
												<span data-value="1" data-label="Vue" />
												<span data-value="2" data-label="Svelte" />
											</UxSelect>
										</UxField>

										<UxField
											label="label"
											message="Message"
											disabled
										>
											<UxSelect
												placeholder="선택해주세요."
												value="0"
												onSelect={(props) => {console.log("UxSelect onSelect", props);}}
											>
												<span data-value="0" data-label="React" />
												<span data-value="1" data-label="Vue" />
												<span data-value="2" data-label="Svelte" />
											</UxSelect>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxSelect + UxInput</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
											result="Result"
										>
											<UxGroup
												className="flex"
												field
											>
												<UxSelect
													placeholder="선택해주세요."
													onSelect={(props) => {console.log("UxSelect onSelect", props);}}
													size="12"
												>
													<span data-value="0" data-label="React" />
													<span data-value="1" data-label="Vue" />
													<span data-value="2" data-label="Svelte" />
												</UxSelect>
												<UxInput
													className="grow"
													placeholder="입력하세요."
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											valid
										>
											<UxGroup
												className="flex"
												field
											>
												<UxSelect
													placeholder="선택해주세요."
													onSelect={(props) => {console.log("UxSelect onSelect", props);}}
													size="12"
												>
													<span data-value="0" data-label="React" />
													<span data-value="1" data-label="Vue" />
													<span data-value="2" data-label="Svelte" />
												</UxSelect>
												<UxInput
													className="grow"
													placeholder="입력하세요."
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											invalid
										>
											<UxGroup
												className="flex"
												field
											>
												<UxSelect
													placeholder="선택해주세요."
													onSelect={(props) => {console.log("UxSelect onSelect", props);}}
													size="12"
												>
													<span data-value="0" data-label="React" />
													<span data-value="1" data-label="Vue" />
													<span data-value="2" data-label="Svelte" />
												</UxSelect>
												<UxInput
													className="grow"
													placeholder="입력하세요."
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											readonly
										>
											<UxGroup
												className="flex"
												field
											>
												<UxSelect
													placeholder="선택해주세요."
													onSelect={(props) => {console.log("UxSelect onSelect", props);}}
													size="12"
												>
													<span data-value="0" data-label="React" />
													<span data-value="1" data-label="Vue" />
													<span data-value="2" data-label="Svelte" />
												</UxSelect>
												<UxInput
													className="grow"
													placeholder="입력하세요."
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											disabled
										>
											<UxGroup
												className="flex"
												field
											>
												<UxSelect
													placeholder="선택해주세요."
													onSelect={(props) => {console.log("UxSelect onSelect", props);}}
													size="12"
												>
													<span data-value="0" data-label="React" />
													<span data-value="1" data-label="Vue" />
													<span data-value="2" data-label="Svelte" />
												</UxSelect>
												<UxInput
													className="grow"
													placeholder="입력하세요."
												/>
											</UxGroup>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxCheckbox</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
										>
											<UxGroup
												className="flex"
												checkbox
											>
												<UxCheckbox
													className="grow"
													label="Unchecked"
												/>
												<UxCheckbox
													className="grow"
													checked={true}
													label="Checked"
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											disabled
										>
											<UxGroup
												className="flex"
												checkbox
											>
												<UxCheckbox
													className="grow"
													label="Unchecked"
												/>
												<UxCheckbox
													className="grow"
													checked={true}
													label="Checked"
												/>
											</UxGroup>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxRadio</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
										>
											<UxGroup
												className="flex"
												radio
												name="RADIO01"
												selected="A"
												onChange={(event)=>{console.log(event)}}
											>
												<UxRadio
													className="grow"
													label="Unselected"
													value="A"
												/>
												<UxRadio
													className="grow"
													label="selected"
													value="B"
												/>
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											disabled
										>
											<UxGroup
												className="flex"
												radio
												name="RADIO02"
												selected="A"
											>
												<UxRadio
													className="grow"
													label="Unselected"
													value="A"
												/>
												<UxRadio
													className="grow"
													label="selected"
													value="B"
												/>
											</UxGroup>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxSwitch</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
										>
											<UxSwitch
												checked={false}
												labelLeft="LIGHT"
												labelRight="DARK"
											/>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxModal (Alert, Confirm, BottomSheet, Modal, Toast)</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxButton
										label="Alert"
										onClick={() => {
											Alert("메세지", {
												title: "알림",
												onConfirm: (close) => {
													console.log("Alert close");
													close();
												}
											});
										}}
									/>
									<UxButton
										label="Confirm"
										onClick={() => {
											Confirm("메세지", {
												title: "알림",
												onCancel: (close) => {
													console.log("Confirm onCancel");
													close();
												},
												onConfirm: (close) => {
													console.log("Confirm onConfirm");
													close();
												}
											});
										}}
									/>
									<UxButton
										label="BottomSheet"
										onClick={() => {
											BottomSheet("메세지", {
												title: "알림",
												onCancel: (close) => {
													console.log("BottomSheet onCancel");
													close();
												},
												onConfirm: (close) => {
													console.log("BottomSheet onConfirm");
													close();
												}
											});
										}}
									/>
									<UxButton
										label="Modal"
										onClick={() => {
											Modal("컨텐츠");
										}}
									/>
									<UxButton
										label="Toast"
										onClick={() => {
											Toast("컨텐츠");
										}}
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxCollapse</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxCard>
										<UxCollapse
											onClick={(event, index)=>{console.log("UxCollapse onClick", event, index)}}
										>
											<div data-expanded={true}>
												<button
													type="button"
													data-role="button"
												>
													<span>UxCollapse1</span>
												</button>
												<div data-role="content">
													<UxInfo
														data={[
															{ label: "label1", value: "value1" },
															{ label: "label2", value: "value2" },
															{ label: "label3", value: "value3" },
														]}
													/>
												</div>
											</div>
											<div data-expanded={false}>
											<button
													type="button"
													data-role="button"
												>
													<span>UxCollapse2</span>
												</button>
												<div data-role="content">
													<UxTextList
														bullet="dot"
														size="md"
														data={[
															"가나다라 / 1234 / Bullet Dot",
															"마바사아 / 5678 / Bullet Dot",
															"자차카타 / 9012 / Bullet Dot",
														]}
													/>
												</div>
											</div>
											<div data-expanded={false}>
											<button
													type="button"
													data-role="button"
												>
													<span>UxCollapse3</span>
												</button>
												<div data-role="content">
													<UxTextList
														prefix="-"
														size="md"
														data={[
															"가나다라 / 1234 / Bullet Dot",
															"마바사아 / 5678 / Bullet Dot",
															"자차카타 / 9012 / Bullet Dot",
														]}
													/>
												</div>
											</div>
										</UxCollapse>
									</UxCard>
									<UxCard>
										<UxCollapse
											once
											onClick={(event, index)=>{console.log("UxCollapse onClick", event, index)}}
										>
											<div data-expanded={true}>
												<button
													type="button"
													data-role="button"
												>
													<span>UxCollapse1</span>
												</button>
												<div data-role="content">
													<UxInfo
														data={[
															{ label: "label1", value: "value1" },
															{ label: "label2", value: "value2" },
															{ label: "label3", value: "value3" },
														]}
													/>
												</div>
											</div>
											<div data-expanded={false}>
											<button
													type="button"
													data-role="button"
												>
													<span>UxCollapse2</span>
												</button>
												<div data-role="content">
													<UxTextList
														bullet="dot"
														size="md"
														data={[
															"가나다라 / 1234 / Bullet Dot",
															"마바사아 / 5678 / Bullet Dot",
															"자차카타 / 9012 / Bullet Dot",
														]}
													/>
												</div>
											</div>
											<div data-expanded={false}>
											<button
													type="button"
													data-role="button"
												>
													<span>UxCollapse3</span>
												</button>
												<div data-role="content">
													<UxTextList
														prefix="-"
														size="md"
														data={[
															"가나다라 / 1234 / Bullet Dot",
															"마바사아 / 5678 / Bullet Dot",
															"자차카타 / 9012 / Bullet Dot",
														]}
													/>
												</div>
											</div>
										</UxCollapse>
									</UxCard>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxTab</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxCard>
										<UxTab
											selected={0}
											full
											onChange={(event, index) => {console.log(event, index)}}
										>
											<div data-label="Tab1">
												Contents1
											</div>
											<div data-label="Tab2">
												Contents2
											</div>
											<div data-label="Tab3">
												Contents3
											</div>
										</UxTab>
									</UxCard>
									<UxCard>
										<UxTab
											selected={0}
											scroll
											onChange={(event, index) => {console.log(event, index)}}
										>
											<div data-label="Tab1">
												Contents1
											</div>
											<div data-label="Tab2">
												Contents2
											</div>
											<div data-label="Tab3">
												Contents3
											</div>
											<div data-label="Tab4">
												Contents4
											</div>
											<div data-label="Tab5">
												Contents5
											</div>
											<div data-label="Tab6">
												Contents6
											</div>
											<div data-label="Tab7">
												Contents7
											</div>
											<div data-label="Tab8">
												Contents8
											</div>
											<div data-label="Tab9">
												Contents9
											</div>
											<div data-label="Tab10">
												Contents10
											</div>
										</UxTab>
									</UxCard>
									<UxCard>
										<UxTab
											selected={0}
											linear
											scroll
											// full
											onChange={(event, index) => {console.log(event, index)}}
										>
											<div data-label="Tab1">
												Contents1
											</div>
											<div data-label="Tab2">
												Contents2
											</div>
											<div data-label="Tab3">
												Contents3
											</div>
											<div data-label="Tab4">
												Contents4
											</div>
											<div data-label="Tab5">
												Contents5
											</div>
											<div data-label="Tab6">
												Contents6
											</div>
											<div data-label="Tab7">
												Contents7
											</div>
											<div data-label="Tab8">
												Contents8
											</div>
											<div data-label="Tab9">
												Contents9
											</div>
											<div data-label="Tab10">
												Contents10
											</div>
										</UxTab>
									</UxCard>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxPagination</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxPagination
										page={1}
										unit={isMobile ? 5 : 10}
										total={35}
										onChange={(page) => {console.log("UxPagination", page);}}
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxToggle</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex column">
									<UxToggle
										label="label"
										onChange={(isToggle) => {console.log(isToggle)}}
									/>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxToggleGroup</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxToggleGroup
										selected={0}
										onChange={(selected) => {console.log(selected)}}
									>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
									</UxToggleGroup>
									<UxToggleGroup
										className="col2"
										selected={0}
										onChange={(selected) => {console.log(selected)}}
									>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
									</UxToggleGroup>
									<UxToggleGroup
										className="col3"
										selected={0}
										onChange={(selected) => {console.log(selected)}}
									>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
									</UxToggleGroup>
									<UxToggleGroup
										className="col4"
										selected={0}
										onChange={(selected) => {console.log(selected)}}
									>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
										<UxToggle
											label="label"
										/>
									</UxToggleGroup>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxKeypad</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxCard>
										<UxKeypad
											shuffle
											onClick={(number) => {console.log(number)}}
											onDelete={() => {console.log("delete")}}
											onClear={() => {console.log("clear")}}
										/>
									</UxCard>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxCalendar (DateCalendar, YearCalendar, MonthCalendar)</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex">
									<UxCard>
										<UxCalendar />
									</UxCard>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxDatePicker</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
											result="Result"
										>
											<UxDatePicker className="grow" />
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											valid
										>
											<UxDatePicker className="grow" />
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											invalid
										>
											<UxDatePicker className="grow" />
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											readonly
										>
											<UxDatePicker className="grow" />
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											disabled
										>
											<UxDatePicker className="grow" />
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxDatePicker Range</h4>
							</UxTitle>

							<UxContent>
								<UxForm>
									<UxFieldset>
										<UxField
											label="label"
											message="Message"
											result="Result"
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxDatePicker className="grow" />
												<UxDatePicker className="grow" />
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											valid
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxDatePicker className="grow" />
												<UxDatePicker className="grow" />
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											invalid
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxDatePicker className="grow" />
												<UxDatePicker className="grow" />
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											readonly
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxDatePicker className="grow" />
												<UxDatePicker className="grow" />
											</UxGroup>
										</UxField>

										<UxField
											label="label"
											message="Message"
											result="Result"
											disabled
										>
											<UxGroup
												className="flex"
												field
												dash
											>
												<UxDatePicker className="grow" />
												<UxDatePicker className="grow" />
											</UxGroup>
										</UxField>
									</UxFieldset>
								</UxForm>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxTooltip</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex column">
									<UxText prefix="1.">
										<span>UxText + UxTooltip (Right)</span>
										<UxTooltip
											icon={<UxIcon icon="question" />}
											close={<UxIcon icon="clear" color="white" />}
											direction="right"
										>
											<div>
												툴팁 컨텐츠<br />
												툴팁 컨텐츠
											</div>
										</UxTooltip>
									</UxText>

									<UxText prefix="2.">
										<span>UxText + UxTooltip (Left)</span>
										<UxTooltip
											icon={<UxIcon icon="question" />}
											close={<UxIcon icon="clear" color="white" />}
											direction="left"
										>
											<div>
												툴팁 컨텐츠<br />
												툴팁 컨텐츠
											</div>
										</UxTooltip>
									</UxText>

									<UxText prefix="3.">
										<span>UxText + UxTooltip (Top)</span>
										<UxTooltip
											icon={<UxIcon icon="question" />}
											close={<UxIcon icon="clear" color="white" />}
											direction="top"
										>
											<div>
												툴팁 컨텐츠<br />
												툴팁 컨텐츠
											</div>
										</UxTooltip>
									</UxText>

									<UxText prefix="4.">
										<span>UxText + UxTooltip (Bottom)</span>
										<UxTooltip
											icon={<UxIcon icon="question" />}
											close={<UxIcon icon="clear" color="white" />}
											direction="bottom"
										>
											<div>
												툴팁 컨텐츠<br />
												툴팁 컨텐츠
											</div>
										</UxTooltip>
									</UxText>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxTimeline</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxTimeline>
										<UxGroup className="flex column">
											<UxChip
												className="dark"
												label="2024.01.01"
											/>
											<UxCard>
												<UxTextList className="line">
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
												</UxTextList>
											</UxCard>
										</UxGroup>

										<UxGroup className="flex column">
											<UxChip
												className="dark"
												label="2024.01.02"
											/>
											<UxCard>
												<UxTextList className="line">
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
												</UxTextList>
											</UxCard>
										</UxGroup>

										<UxGroup className="flex column">
											<UxChip
												className="dark"
												label="2024.01.03"
											/>
											<UxCard>
												<UxTextList className="line">
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
												</UxTextList>
											</UxCard>
										</UxGroup>
									</UxTimeline>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>UxTimeline Index</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxTimeline number>
										<UxGroup className="flex column">
											<UxChip
												className="dark"
												label="2024.01.01"
											/>
											<UxCard>
												<UxTextList className="line">
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
												</UxTextList>
											</UxCard>
										</UxGroup>

										<UxGroup className="flex column">
											<UxChip
												className="dark"
												label="2024.01.02"
											/>
											<UxCard>
												<UxTextList className="line">
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
												</UxTextList>
											</UxCard>
										</UxGroup>

										<UxGroup className="flex column">
											<UxChip
												className="dark"
												label="2024.01.03"
											/>
											<UxCard>
												<UxTextList className="line">
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
													<UxText label="타임라인"/>
												</UxTextList>
											</UxCard>
										</UxGroup>
									</UxTimeline>
								</UxGroup>
							</UxContent>
						</UxArticle>

						<UxDivider className="md wide"/>

						<UxArticle>
							<UxTitle>
								<h4>TODO</h4>
							</UxTitle>

							<UxContent>
								<UxGroup className="flex wrap">
									<UxBreadcrumb>UxBreadcrumb</UxBreadcrumb>
									<UxRange>UxRange</UxRange>
									<UxDropdown>UxDropdown</UxDropdown>
									<UxFilter>UxFilter</UxFilter>
									<UxPopover>UxPopover</UxPopover>
									<UxProgress>UxProgress</UxProgress>
									<UxSwiper>UxSwiper</UxSwiper>
									<UxTooltip>UxTooltip</UxTooltip>
								</UxGroup>
							</UxContent>
						</UxArticle>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxDock>
				Dock
			</UxDock>
		</UxLayout>
	);
};

export default Page;