import React from "react";

type Props = {
  params: { id: string };
};

const SingleDevicePage = async ({ params }: Props) => {
  const id = (await params).id;
  // TODO: Fetch device by ID
  // TODO: Add UI to display device details
  // TODO: Add UI to update device details
  // TODO: Add UI to delete device
  // TODO: Add UI to navigate back to devices list
  return <div>SingleDevicePage</div>;
};

export default SingleDevicePage;
